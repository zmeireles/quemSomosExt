# QuemSomos Component Tutorial

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Customization](#customization)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

## Introduction

The QuemSomos component is a React-based, responsive "About Us" section for websites. It features a visually appealing design with a glassy effect panel, customizable backgrounds, colors, and smooth animations.

## Features

- Responsive design
- Customizable background images
- Adjustable glassy effect with blur and opacity controls
- Animated text and progress dots
- Configurable animation durations and delays
- Smooth scrolling between sections

## Installation

1. Ensure you have React and Tailwind CSS set up in your project.

2. Install the required dependencies:

```bash
npm install @tailwindcss/typography
```

3. Copy the following files into your project's components directory:
   - `QuemSomosExt.tsx`
   - `QuemSomosItemExt.tsx`
   - `ProgressDotsExt.tsx`

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

## Usage

Here's an example of how to use the QuemSomosExt component in your React application:

```jsx
import React from 'react';
import QuemSomosExt from './components/QuemSomosExt';
import { IQuemSomos } from './models/database';

const App: React.FC = () => {
  const slides: IQuemSomos[] = [
    {
      id: '1',
      data: "Quem Somos",
      titulo: "Nossa História",
      texto: "Somos uma empresa inovadora dedicada a criar soluções tecnológicas que transformam vidas.",
      background: "https://example.com/image1.jpg",
    },
    {
      id: '2',
      data: "Nossa Missão",
      titulo: "Inovação Constante",
      texto: "Buscamos constantemente novas formas de aplicar a tecnologia para resolver problemas complexos e melhorar a qualidade de vida das pessoas.",
      background: "https://example.com/image2.jpg",
    },
    {
      id: '3',
      data: "Nosso Futuro",
      titulo: "Expandindo Horizontes",
      texto: "Estamos comprometidos em expandir nossa presença global, trazendo soluções inovadoras para mercados emergentes e estabelecidos.",
      background: "https://example.com/image3.jpg",
    },
  ];

  return (
    <div className="App">
      <QuemSomosExt blocks={slides} dotDistance={50} rippleMaxSize={50} />
    </div>
  );
};

export default App;
```

## Configuration

The QuemSomosExt component accepts the following props:

- `blocks`: An array of IQuemSomos objects containing the content for each slide
- `dotDistance`: Distance between progress dots (optional)
- `rippleMaxSize`: Maximum size of the ripple effect on dots (optional)

Each IQuemSomos object should have the following structure:

```typescript
interface IQuemSomos {
  id: string;
  data: string;
  titulo: string;
  texto?: string;
  background: string;
}
```

## Customization

You can easily customize the appearance and behavior of the QuemSomos component:

1. Changing the glassy effect:
   - Adjust the `opacity` prop in QuemSomosItemExt to make the panel more or less transparent.
   - Modify the `blurAmount` prop to increase or decrease the blur effect.

2. Customizing animations:
   - Use `fadeInDuration`, `slideInLeftDuration`, and `slideInRightDuration` props to control the speed of different animations.
   - Set `animationDelay` to create a staggered animation effect.

3. Adapting to different color schemes:
   - Modify the `SECTION_COLORS` and `FONT_COLORS` arrays in `src/util/consts.ts` to match your website's color palette.

4. Adjusting responsive behavior:
   - The component is already responsive, but you can fine-tune the breakpoints and styles in the QuemSomosItemExt component if needed.

## Best Practices

1. Use high-quality, optimized images for the background to ensure fast loading times.
2. Test the component with different screen sizes to ensure responsiveness.
3. Experiment with animation timings to find the right balance between visual appeal and performance.
4. Consider using color variables or a theming system for consistent styling across your application.

## Troubleshooting

If you encounter any issues with the component, try the following:

1. Ensure all required dependencies are installed and up-to-date.
2. Check that your Tailwind CSS configuration includes the necessary plugins and custom styles.
3. Verify that the CSS animations are properly defined in your global CSS file.
4. Make sure the IQuemSomos objects in the `blocks` prop have all the required fields.
5. If scrolling issues occur, check for any conflicting scroll event listeners in your application.

By following this tutorial, you should be able to successfully integrate and customize the QuemSomos component in your React application. If you need further assistance, please refer to the component's source code or reach out to the development team.