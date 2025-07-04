# Component Popup System

This popup system provides contextual information about how different sections of the portfolio were built. It's designed to enhance the user experience by providing insights into the technical implementation of each component.

## Features

- **Smooth Animations**: Popups slide in from the sides with smooth CSS animations
- **Alternating Sides**: First popup comes from left, second from right, alternating pattern
- **Scroll Detection**: Popups automatically hide when the user scrolls
- **Mobile Responsive**: Only shows on desktop (lg breakpoint and above)
- **Accessibility**: Includes proper ARIA labels and keyboard navigation
- **Auto-dismiss**: Popups automatically disappear after 4 seconds

## Components

### ComponentPopup
The main popup component that displays component information.

**Props:**
- `isVisible`: Boolean to control visibility
- `onClose`: Function to close the popup
- `title`: Component title
- `description`: Brief description of the component
- `technologies`: Array of technologies used
- `approach`: Technical approach description
- `side`: 'left' or 'right' for slide direction
- `delay`: Auto-dismiss delay in milliseconds (default: 3000)

### WithPopup
Higher-order component that wraps sections and triggers popups when they enter the viewport.

**Props:**
- `children`: The section component to wrap
- `popupData`: Popup information object
- `side`: 'left' or 'right' for slide direction
- `className`: Additional CSS classes

### PopupContext
React context that manages popup state across the application.

## Usage

```tsx
import WithPopup from './components/WithPopup';

<WithPopup
  popupData={{
    title: "Profile Section",
    description: "A dynamic hero section featuring a typewriter effect.",
    technologies: ["React", "TypeScript", "CSS"],
    approach: "Uses custom hooks for typewriter animation and responsive design."
  }}
  side="left"
>
  <Profile />
</WithPopup>
```

## Styling

The popup system uses Tailwind CSS classes and custom animations defined in `globals.css`:

- `animate-slide-in-left`: Slides in from left
- `animate-slide-in-right`: Slides in from right
- `animate-slide-out-left`: Slides out to left
- `animate-slide-out-right`: Slides out to right

## Accessibility

- Proper ARIA labels and roles
- Keyboard navigation (Escape key to close)
- Screen reader friendly
- High contrast design
- Focus management 