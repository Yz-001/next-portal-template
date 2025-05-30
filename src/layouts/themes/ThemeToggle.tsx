// src/layouts/themes/ThemeToggle.tsx
'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={
        "p-2 rounded-full transition-colors " +
        "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      }
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun 
            size={16} 
            className="text-[var(--theme-icon-light)]" 
        />
      ) : (
        <Moon 
            size={16} 
            className="text-[var(--theme-icon-dark)]" 
        />
      )}
    </button>
  );
}