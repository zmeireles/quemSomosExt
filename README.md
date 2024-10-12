# QuemSomosExt Component

QuemSomosExt is a React component that creates a visually appealing and interactive "About Us" section for your website. It features a glassy effect panel with customizable background, colors, and animations.

## Features

- Responsive design
- Customizable background image
- Adjustable glassy effect with blur and opacity controls
- Animated text and progress dots
- Configurable animation durations and delays

## Installation

1. First, ensure you have React and Tailwind CSS set up in your project.

2. Install the required dependencies:

```bash
npm install @tailwindcss/typography
```

3. Copy the `QuemSomosItemExt.tsx` and `ProgressDotsExt.tsx` files into your project's components directory.

4. Update your `tailwind.config.js` to include the typography plugin and any custom styles:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

5. Add the necessary CSS animations to your global CSS file (e.g., `index.css`):

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

.animate-slideInLeft {
  animation: slideInLeft 0.5s ease-out;
}

.animate-slideInRight {
  animation: slideInRight 0.5s ease-out;
}
```

## Configuration

The QuemSomosItemExt component accepts the following props:

- `data`: Main title (string)
- `titulo`: Subtitle (string)
- `texto`: Description text (string, optional)
- `background`: URL of the background image (string)
- `bgColor`: Background color of the panel (string, hex format)
- `textColor`: Text color (string, hex format)
- `index`: Current index of the item (number)
- `length`: Total number of items (number)
- `opacity`: Opacity of the panel (number, 0-1, default: 0.7)
- `blurAmount`: Blur amount for the glassy effect (number, default: 20)
- `animationDuration`: Duration of the animations in milliseconds (number, default: 500)
- `fadeInDuration`: Duration of fade-in animations (number, default: 500)
- `slideInLeftDuration`: Duration of slide-in-left animations (number, default: 500)
- `slideInRightDuration`: Duration of slide-in-right animations (number, default: 500)
- `animationDelay`: Delay before animations start (number, default: 0)

The ProgressDotsExt component accepts these additional props:

- `dotColor`: Color of the dots (string, default: "#ffffff")
- `activeDotSize`: Size of the active dot in pixels (number, default: 15)
- `inactiveDotSize`: Size of inactive dots in pixels (number, default: 5)
- `animationDuration`: Duration of dot animations (number, default: 300)
- `animationDelay`: Delay before dot animations start (number, default: 0)

## Usage

Here's an example of how to use the QuemSomosItemExt component with custom animation settings:

```jsx
import React from 'react';
import QuemSomosItemExt from './components/QuemSomosItemExt';

const App = () => {
  const sampleData = {
    data: "Quem Somos",
    titulo: "Nossa História",
    texto: "Somos uma empresa inovadora dedicada a criar soluções tecnológicas que transformam vidas.",
    background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    bgColor: "#f46036",
    textColor: "#ffffff",
    index: 0,
    length: 3,
    opacity: 0.3,
    blurAmount: 10,
    animationDuration: 800,
    fadeInDuration: 1000,
    slideInLeftDuration: 800,
    slideInRightDuration: 800,
    animationDelay: 200
  };

  return (
    <div className="App">
      <QuemSomosItemExt {...sampleData} />
    </div>
  );
};

export default App;
```

## Customization

You can easily customize the appearance and behavior of the QuemSomosExt component by adjusting the props. Here are some examples:

1. Changing the glassy effect:
   - Adjust the `opacity` prop to make the panel more or less transparent.
   - Modify the `blurAmount` prop to increase or decrease the blur effect.

2. Customizing animations:
   - Use `fadeInDuration`, `slideInLeftDuration`, and `slideInRightDuration` to control the speed of different animations.
   - Set `animationDelay` to create a staggered animation effect when multiple components are present.

3. Adapting to different color schemes:
   - Change `bgColor` and `textColor` to match your website's color palette.
   - Adjust the `dotColor` in ProgressDotsExt to complement your design.

## Best Practices

1. Use high-quality, optimized images for the background to ensure fast loading times.
2. Test the component with different screen sizes to ensure responsiveness.
3. Experiment with animation timings to find the right balance between visual appeal and performance.
4. Consider using color variables or a theming system for consistent styling across your application.

## Troubleshooting

If you encounter any issues with the component, try the following:

1. Ensure all required dependencies are installed and up-to-date.
2. Check that your Tailwind CSS configuration includes the necessary plugi