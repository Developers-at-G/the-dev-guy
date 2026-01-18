'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Navigation from '../Navigation/Navigation';
import { useLanguage } from '../context/LanguageContext';

export default function FrontendArchitecturePage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="pt-16">
        <Container size="lg" className="py-12 md:py-16">
          {/* Header */}
          <div className="mb-12">
            <Button variant="outline" size="sm" asChild className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('frontend_architecture.back_to_portfolio', 'common')}
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('frontend_architecture.title', 'common')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {t('frontend_architecture.description', 'common')}
            </p>
            <div className="mt-6 h-px w-24 bg-primary" />
          </div>

          {/* Next.js App Structure */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('frontend_architecture.nextjs_structure', 'common')}
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.server_vs_client.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.server_vs_client.item_1.title}</strong> {translations.frontendArchitecture.sections.server_vs_client.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.server_vs_client.item_2.title}</strong> {translations.frontendArchitecture.sections.server_vs_client.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.server_vs_client.item_3.title}</strong> {translations.frontendArchitecture.sections.server_vs_client.item_3.description}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.data_fetching.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.data_fetching.item_1.title}</strong> {translations.frontendArchitecture.sections.data_fetching.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.data_fetching.item_2.title}</strong> {translations.frontendArchitecture.sections.data_fetching.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.data_fetching.item_3.title}</strong> {translations.frontendArchitecture.sections.data_fetching.item_3.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.data_fetching.item_4.title}</strong> {translations.frontendArchitecture.sections.data_fetching.item_4.description}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.rendering_strategies.title', 'frontendArchitecture')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{translations.frontendArchitecture.sections.rendering_strategies.ssr.title}</h4>
                    <p className="ml-4">{translations.frontendArchitecture.sections.rendering_strategies.ssr.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{translations.frontendArchitecture.sections.rendering_strategies.ssg.title}</h4>
                    <p className="ml-4">{translations.frontendArchitecture.sections.rendering_strategies.ssg.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{translations.frontendArchitecture.sections.rendering_strategies.isr.title}</h4>
                    <p className="ml-4">{translations.frontendArchitecture.sections.rendering_strategies.isr.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Component System */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('frontend_architecture.component_system', 'common')}
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.architecture_layers.title', 'frontendArchitecture')}</h3>
                
                {/* Visual Diagram */}
                <div className="my-6 space-y-4 max-w-2xl">
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {translations.frontendArchitecture.sections.architecture_layers.page_components.title}
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">{translations.frontendArchitecture.sections.architecture_layers.page_components.description}</div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {translations.frontendArchitecture.sections.architecture_layers.composite_components.title}
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">{translations.frontendArchitecture.sections.architecture_layers.composite_components.description}</div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {translations.frontendArchitecture.sections.architecture_layers.ui_primitives.title}
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">{translations.frontendArchitecture.sections.architecture_layers.ui_primitives.description}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.composition_reuse.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.composition_reuse.item_1.title}</strong> {translations.frontendArchitecture.sections.composition_reuse.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.composition_reuse.item_2.title}</strong> {translations.frontendArchitecture.sections.composition_reuse.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.composition_reuse.item_3.title}</strong> {translations.frontendArchitecture.sections.composition_reuse.item_3.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.composition_reuse.item_4.title}</strong> {translations.frontendArchitecture.sections.composition_reuse.item_4.description}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* State Management */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('frontend_architecture.sections.state_management.title', 'frontendArchitecture')}
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.state_management.location_strategy.title', 'frontendArchitecture')}</h3>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {translations.frontendArchitecture.sections.state_management.location_strategy.url_state.title}
                    </div>
                    <ul className="text-sm space-y-1.5 ml-4 list-disc text-muted-foreground">
                      {translations.frontendArchitecture.sections.state_management.location_strategy.url_state.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      {translations.frontendArchitecture.sections.state_management.location_strategy.server_state.title}
                    </div>
                    <ul className="text-sm space-y-1.5 ml-4 list-disc text-muted-foreground">
                      {translations.frontendArchitecture.sections.state_management.location_strategy.server_state.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      {translations.frontendArchitecture.sections.state_management.location_strategy.client_state.title}
                    </div>
                    <ul className="text-sm space-y-1.5 ml-4 list-disc text-muted-foreground">
                      {translations.frontendArchitecture.sections.state_management.location_strategy.client_state.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.state_management.global_state.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.state_management.global_state.item_1.title}</strong> {translations.frontendArchitecture.sections.state_management.global_state.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.state_management.global_state.item_2.title}</strong> {translations.frontendArchitecture.sections.state_management.global_state.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.state_management.global_state.item_3.title}</strong> {translations.frontendArchitecture.sections.state_management.global_state.item_3.description}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance & DX */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('frontend_architecture.sections.performance_dx.title', 'frontendArchitecture')}
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.performance_dx.code_splitting.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.code_splitting.item_1.title}</strong> {translations.frontendArchitecture.sections.performance_dx.code_splitting.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.code_splitting.item_2.title}</strong> {translations.frontendArchitecture.sections.performance_dx.code_splitting.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.code_splitting.item_3.title}</strong> {translations.frontendArchitecture.sections.performance_dx.code_splitting.item_3.description}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.performance_dx.image_font.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.image_font.item_1.title}</strong> {translations.frontendArchitecture.sections.performance_dx.image_font.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.image_font.item_2.title}</strong> {translations.frontendArchitecture.sections.performance_dx.image_font.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.image_font.item_3.title}</strong> {translations.frontendArchitecture.sections.performance_dx.image_font.item_3.description}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.performance_dx.memoization.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.memoization.item_1.title}</strong> {translations.frontendArchitecture.sections.performance_dx.memoization.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.memoization.item_2.title}</strong> {translations.frontendArchitecture.sections.performance_dx.memoization.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.memoization.item_3.title}</strong> {translations.frontendArchitecture.sections.performance_dx.memoization.item_3.description}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t('frontend_architecture.sections.performance_dx.observability.title', 'frontendArchitecture')}</h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.observability.item_1.title}</strong> {translations.frontendArchitecture.sections.performance_dx.observability.item_1.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.observability.item_2.title}</strong> {translations.frontendArchitecture.sections.performance_dx.observability.item_2.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.observability.item_3.title}</strong> {translations.frontendArchitecture.sections.performance_dx.observability.item_3.description}</li>
                  <li><strong className="text-foreground">{translations.frontendArchitecture.sections.performance_dx.observability.item_4.title}</strong> {translations.frontendArchitecture.sections.performance_dx.observability.item_4.description}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              {t('frontend_architecture.sections.footer.text', 'frontendArchitecture')} {new Date().toLocaleDateString(translations.common.nav.about === 'À propos' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long' })}.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}

