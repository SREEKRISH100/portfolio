import React, { useEffect, useState } from 'react';

type Theme = 'cyber' | 'bio' | 'light';

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('cyber');

    useEffect(() => {
        // Remove all theme classes first
        document.body.classList.remove('theme-green', 'theme-white');

        // Add the selected theme class (cyber is default, so no class needed)
        if (theme === 'bio') {
            document.body.classList.add('theme-green');
        } else if (theme === 'light') {
            document.body.classList.add('theme-white');
        }
    }, [theme]);

    return (
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-2 py-1 backdrop-blur-md">
            <button
                onClick={() => setTheme('cyber')}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${theme === 'cyber' ? 'bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]' : 'bg-[#00E5FF]/20 hover:bg-[#00E5FF]/50'
                    }`}
                title="Cyber Blue (Default)"
            >
                {theme === 'cyber' && <div className="w-2 h-2 bg-white rounded-full" />}
            </button>
            <button
                onClick={() => setTheme('bio')}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${theme === 'bio' ? 'bg-[#00FF41] shadow-[0_0_10px_#00FF41]' : 'bg-[#00FF41]/20 hover:bg-[#00FF41]/50'
                    }`}
                title="Bio Hazard (Green)"
            >
                {theme === 'bio' && <div className="w-2 h-2 bg-black rounded-full" />}
            </button>
            <button
                onClick={() => setTheme('light')}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${theme === 'light' ? 'bg-white shadow-[0_0_10px_white]' : 'bg-white/20 hover:bg-white/50'
                    }`}
                title="Light Mode (White)"
            >
                {theme === 'light' && <div className="w-2 h-2 bg-black rounded-full" />}
            </button>
        </div>
    );
};
