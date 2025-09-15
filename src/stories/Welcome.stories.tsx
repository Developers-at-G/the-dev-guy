import type { Meta, StoryObj } from '@storybook/react';

const Welcome = () => (
  <div style={{ padding: '3rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
    <h1 style={{ color: '#4f46e5', marginBottom: '1rem' }}>
      DevGuy UI Components
    </h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#6b7280' }}>
      Welcome to the DevGuy UI Components Storybook! This is a showcase of reusable React components 
      built with TypeScript and designed for modern web applications.
    </p>
    
    <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
      <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>Available Components</h2>
      <ul style={{ color: '#4b5563', lineHeight: '1.8' }}>
        <li><strong>Button</strong> - Primary and secondary button variants with different sizes</li>
        <li><strong>Card</strong> - Flexible card component for content display</li>
        <li><strong>Input</strong> - Form input fields with labels and validation states</li>
      </ul>
    </div>

    <div style={{ background: '#eff6ff', padding: '2rem', borderRadius: '8px' }}>
      <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>How to Use</h2>
      <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
        Navigate through the sidebar to explore each component. Use the interactive controls 
        in the "Controls" tab to test different props and see how components behave.
      </p>
      <code style={{ 
        background: '#e5e7eb', 
        padding: '0.5rem 1rem', 
        borderRadius: '4px', 
        display: 'block',
        marginTop: '1rem',
        color: '#374151'
      }}>
        npm install devguy-ui-components
      </code>
    </div>
  </div>
);

const meta: Meta<typeof Welcome> = {
  title: 'Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to DevGuy UI Components - a collection of reusable React components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
