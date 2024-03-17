import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_CONTEXT, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_CONTEXT, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
