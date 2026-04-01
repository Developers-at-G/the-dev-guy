'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useChat, type UIMessage } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { trackChatbotOpened, trackChatbotMessageSent, trackChatbotNavigation } from '../../utils/analytics';
import { useLanguage } from '../../app/context/LanguageContext';

type MascotMood = 'idle' | 'thinking' | 'talking' | 'excited' | 'waving';

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map(p => p.text)
    .join('');
}

// Profile Picture Avatar
const AbdallahAvatar: React.FC<{ mood: MascotMood; size?: 'sm' | 'md' | 'lg' }> = ({ mood, size = 'md' }) => {
  const sizeClass = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  }[size];

  const getAnimation = () => {
    switch (mood) {
      case 'waving':
        return { rotate: [0, 10, -10, 10, 0], transition: { duration: 1, repeat: 2 } };
      case 'thinking':
        return { rotate: [-3, 3, -3], transition: { duration: 1.5, repeat: Infinity } };
      case 'talking':
        return { y: [0, -2, 0], transition: { duration: 0.3, repeat: Infinity } };
      case 'excited':
        return { scale: [1, 1.05, 1], transition: { duration: 0.4, repeat: 3 } };
      default:
        return { y: [0, -1, 0], transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } };
    }
  };

  return (
    <motion.div 
      className={`${sizeClass} relative rounded-full overflow-hidden`}
      animate={getAnimation()}
    >
      <Image
        src="/Images/Picture.jpeg"
        alt="Abdallah Amadou Gueye"
        fill
        sizes="64px"
        className="object-cover object-center rounded-full"
      />
      
      {/* Thinking indicator */}
      {mood === 'thinking' && (
        <motion.div 
          className="absolute -top-1 -right-1 text-sm"
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          💭
        </motion.div>
      )}
      
      {/* Sparkles when excited */}
      {mood === 'excited' && (
        <>
          <motion.span 
            className="absolute -top-1 -left-1 text-xs"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >✨</motion.span>
          <motion.span 
            className="absolute -bottom-1 -right-1 text-xs"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          >⭐</motion.span>
        </>
      )}
      
      {/* Code symbols when talking */}
      {mood === 'talking' && (
        <motion.div 
          className="absolute -top-1 -right-1 text-[10px] font-mono text-primary font-bold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
      )}
    </motion.div>
  );
};

// Navigation links that the chatbot can suggest
const NAVIGATION_MAP: Record<string, { path: string; label: string }> = {
  'projects': { path: '/Projects', label: 'My Projects' },
  'blog': { path: '/blog', label: 'Blog' },
  'frontend': { path: '/frontend-architecture', label: 'Frontend Architecture' },
  'keur-gui': { path: '/case-studies/keur-gui', label: 'Keur Gui Case Study' },
  'kader': { path: '/case-studies/kader-qui-gere', label: 'Kader qui gère' },
  'devtrackr': { path: '/case-studies/devtrackr', label: 'DevTrackr Case Study' },
};

// Quick action chips - shown at welcome
const WelcomeActions: React.FC<{ onAction: (text: string) => void }> = ({ onAction }) => {
  const { t } = useLanguage();
  return (
    <motion.div 
      className="flex flex-wrap gap-2 px-2 py-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <p className="w-full text-xs text-muted-foreground mb-1">{t('chatbot.try_asking', 'common')}</p>
      {[
        { label: t('chatbot.say_hello', 'common'), text: t('chatbot.say_hello_text', 'common') },
        { label: t('chatbot.experience', 'common'), text: t('chatbot.experience_text', 'common') },
        { label: t('chatbot.education', 'common'), text: t('chatbot.education_text', 'common') },
      ].map((action, index) => (
        <motion.button
          key={action.label}
          onClick={() => onAction(action.text)}
          className="px-3 py-1.5 text-xs bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 text-foreground rounded-full border border-primary/20 transition-all hover:border-primary/40 hover:shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          {action.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

// Link Button Component for navigation
const NavigationButton: React.FC<{ 
  path: string; 
  label: string; 
  onClick: () => void 
}> = ({ path, label, onClick }) => (
  <motion.button
    onClick={onClick}
    className="inline-flex items-center gap-1.5 px-2.5 py-1 my-1 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 text-primary rounded-lg text-xs font-medium transition-all border border-primary/30 hover:border-primary/50 shadow-sm"
    whileHover={{ scale: 1.05, y: -1 }}
    whileTap={{ scale: 0.95 }}
  >
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
    <span>{label || path}</span>
  </motion.button>
);

// Message bubble with improved link parsing
const MessageBubble: React.FC<{
  message: UIMessage;
  isLatest: boolean;
  onNavigate: (path: string) => void;
  mood: MascotMood;
}> = ({ message, isLatest, onNavigate, mood }) => {
  const { t } = useLanguage();
  const isUser = message.role === 'user';
  
  // Parse content for navigation links in format [/path] or [path]
  const renderContent = () => {
    const content = getMessageText(message);
    
    // Match patterns like [/Projects], [/blog], etc.
    const linkRegex = /\[(\/?[^\]]+)\]/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = linkRegex.exec(content)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(<span key={key++}>{content.slice(lastIndex, match.index)}</span>);
      }
      
      // Process the link
      let path = match[1];
      if (!path.startsWith('/')) {
        path = '/' + path;
      }
      
      // Find a nice label for the path
      const navEntry = Object.values(NAVIGATION_MAP).find(n => n.path.toLowerCase() === path.toLowerCase());
      const label = navEntry?.label || path.replace(/^\//, '').replace(/-/g, ' ');
      
      parts.push(
        <NavigationButton
          key={key++}
          path={path}
          label={label}
          onClick={() => onNavigate(path)}
        />
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(<span key={key++}>{content.slice(lastIndex)}</span>);
    }
    
    return parts.length > 0 ? parts : content;
  };

  return (
    <motion.div
      className={`flex gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
      initial={{ opacity: 0, y: 15, x: isUser ? 20 : -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Avatar */}
      {!isUser ? (
        <div className="flex-shrink-0 mt-1">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-0.5 border border-primary/30 overflow-hidden">
            <AbdallahAvatar mood={isLatest ? mood : 'idle'} size="sm" />
          </div>
        </div>
      ) : (
        <div className="flex-shrink-0 mt-1">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold shadow-md">
            {t('chatbot.you', 'common')}
          </div>
        </div>
      )}
      
      {/* Message */}
      <motion.div
        className={`max-w-[78%] rounded-2xl px-4 py-2.5 shadow-sm ${
          isUser
            ? 'bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-tr-sm'
            : 'bg-muted/95 text-muted-foreground rounded-tl-sm border border-border shadow-sm backdrop-blur-sm'
        }`}
        whileHover={{ scale: 1.01 }}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {renderContent()}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Typing indicator
const TypingIndicator: React.FC = () => (
  <motion.div
    className="flex items-center gap-2"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <AbdallahAvatar mood="thinking" size="sm" />
    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-muted/95 rounded-2xl rounded-tl-sm border border-border shadow-sm backdrop-blur-sm">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{
              y: [0, -5, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: i * 0.12,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <span className="ml-1.5 text-xs text-muted-foreground italic">typing...</span>
    </div>
  </motion.div>
);

// Main Chatbot Component
export const Chatbot: React.FC = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const { messages, sendMessage, status, error } = useChat({
    onError: (error) => {
      console.error('Chat error:', error);
    },
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mascotMood, setMascotMood] = useState<MascotMood>('idle');
  const [input, setInput] = useState('');
  const isLoading = status === 'streaming' || status === 'submitted';

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update mascot mood
  useEffect(() => {
    if (isLoading) {
      setMascotMood('thinking');
    } else if (messages.length > 0 && messages[messages.length - 1].role === 'assistant') {
      setMascotMood('talking');
      const timer = setTimeout(() => setMascotMood('idle'), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, messages]);

  // Wave when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMascotMood('waving');
      const timer = setTimeout(() => setMascotMood('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  // Smooth scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, isLoading]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to toggle chat
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Escape to close chat
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      trackChatbotOpened();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleNavigate = useCallback((path: string) => {
    // Track navigation from chatbot
    trackChatbotNavigation(path, 'chatbot');
    // Close the chat first with a small delay for visual feedback
    setMascotMood('excited');
    setTimeout(() => {
      setIsOpen(false);
      router.push(path);
    }, 300);
  }, [router]);

  const handleQuickAction = useCallback((text: string) => {
    const userMessages = messages.filter(m => m.role === 'user');
    trackChatbotMessageSent(text, text.length, userMessages.length);
    sendMessage({ text });
  }, [sendMessage, messages]);

  const handleSubmitWithTracking = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessages = messages.filter(m => m.role === 'user');
    trackChatbotMessageSent(input, input.length, userMessages.length);
    
    sendMessage({ text: input });
    setInput('');
  }, [input, isLoading, messages, sendMessage]);

  const welcomeMessage: UIMessage = {
    id: 'welcome',
    role: 'assistant',
    parts: [{ type: 'text', text: t('chatbot.welcome', 'common') }],
  };

  const displayMessages: UIMessage[] = messages.length === 0 ? [welcomeMessage] : messages;

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent shadow-xl shadow-primary/30 flex items-center justify-center group overflow-visible"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        aria-label={isOpen ? t('chatbot.close', 'common') : t('chatbot.chat_with', 'common') || 'Chat with Abdallah'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.div
              key="chat-icon"
              className="w-7 h-7 text-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.8, 0, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}

        {/* Message count badge */}
        {!isOpen && messages.length > 0 && (
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
          >
            {messages.length > 9 ? '9+' : messages.length}
          </motion.div>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg"
            initial={{ x: 10 }}
            animate={{ x: 0 }}
          >
            <span className="font-medium">{t('chatbot.chat_with_me', 'common')}</span> 💬
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed z-40 flex flex-col bg-background border border-border rounded-2xl shadow-2xl shadow-black/20 overflow-hidden backdrop-blur-xl transition-all duration-300 ${
              isExpanded 
                ? 'bottom-6 right-6 left-6 top-6 sm:left-auto sm:top-auto sm:bottom-6 sm:right-6 sm:w-[600px] sm:h-[85vh]' 
                : 'bottom-32 right-6 w-[92vw] sm:w-[380px] h-[520px] max-h-[75vh]'
            }`}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={isLoading ? { scale: [1, 1.03, 1] } : {}}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  <AbdallahAvatar mood={mascotMood} size="md" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    Abdallah
                    <span className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-400' : 'bg-emerald-400'} shadow-sm`} />
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {isLoading ? `✨ ${t('chatbot.thinking', 'common')}` : `🟢 ${t('chatbot.ask_anything', 'common')}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* Expand/Collapse button */}
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 hover:bg-foreground/10 rounded-xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={isExpanded ? 'Collapse' : 'Expand'}
                >
                  {isExpanded ? (
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  )}
                </motion.button>
                {/* Minimize button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-foreground/10 rounded-xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Minimize"
                >
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              <AnimatePresence initial={false}>
                {displayMessages.map((message: UIMessage, index: number) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isLatest={index === displayMessages.length - 1}
                    onNavigate={handleNavigate}
                    mood={mascotMood}
                  />
                ))}
              </AnimatePresence>

              {/* Show welcome actions only at start */}
              {messages.length === 0 && <WelcomeActions onAction={handleQuickAction} />}
              
              {isLoading && <TypingIndicator />}

              {error && (
                <motion.div
                  className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl p-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="font-medium text-sm mb-1">😅 {t('chatbot.error', 'common')}</div>
                  <div className="text-xs opacity-80">
                    {error.message?.includes('quota') ? (
                      "I'm taking a quick break. Try emailing me instead!"
                    ) : (
                      'Please try again in a moment.'
                    )}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions - Always visible */}
            <div className="px-3 pt-2 border-t border-border/50 bg-background/95">
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: '💼 Projects', text: 'Show me your projects' },
                  { label: '📝 Blog', text: 'What do you write about?' },
                  { label: '🛠️ Skills', text: 'What are your skills?' },
                  { label: '📬 Contact', text: 'How can I contact you?' },
                ].map((action) => (
                  <motion.button
                    key={action.label}
                    type="button"
                    onClick={() => handleQuickAction(action.text)}
                    className="px-2.5 py-1 text-xs bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full border border-border/50 hover:border-border transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={isLoading}
                  >
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmitWithTracking} className="p-3 bg-background/95 backdrop-blur-sm">
              <div className="flex gap-2">
                <motion.input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('chatbot.type_message', 'common')}
                  className="flex-1 px-4 py-2.5 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-sm"
                  disabled={isLoading}
                  maxLength={1000}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center min-w-[48px] shadow-lg shadow-primary/20"
                  whileHover={{ scale: isLoading || !input.trim() ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading || !input.trim() ? 1 : 0.95 }}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </motion.button>
              </div>
              
              {input.length > 800 && (
                <motion.p
                  className="text-xs text-muted-foreground mt-1.5 text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {input.length}/1000
                </motion.p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
