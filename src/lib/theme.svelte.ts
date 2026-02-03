import { getContext, setContext } from 'svelte';

type Theme = 'dark' | 'light';

class ThemeManager {
    current = 'dark';

    constructor() {
        // Enforce light mode always
        this.current = 'dark';
    }

    toggle() {
        // Disabled theme toggling
    }

    apply() {
        if (typeof window !== 'undefined') {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    }
}

const THEME_KEY = Symbol('theme');

export function setTheme() {
    const manager = new ThemeManager();
    return setContext(THEME_KEY, manager);
}

export function getTheme() {
    return getContext<ThemeManager>(THEME_KEY);
}
