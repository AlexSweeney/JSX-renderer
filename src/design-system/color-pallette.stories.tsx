// ColorPalette.stories.jsx
import React from 'react';
import { theme } from './theme';

export default {
  title: 'Design System/Colors',
};

export const Palette = () => (
  <div className="grid grid-cols-3 gap-6">
    {Object.entries(theme.colors).map(([name, value]) => (
      <div key={name} className="flex flex-col items-center">
        <div
          className="w-20 h-20 rounded shadow"
          style={{ backgroundColor: value }}
        />
        <span className="mt-2 text-text-contrast">{name}</span>
        <span className="text-xs text-text">{value}</span>
      </div>
    ))}
  </div>
);
