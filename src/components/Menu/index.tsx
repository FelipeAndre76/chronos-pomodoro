import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';


type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme;
    });

    const nextThemeIcom = {
        dark: <SunIcon />,
        light: <MoonIcon />
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return newTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    return (
    
        <nav className={styles.menu}>
            <a className={styles.MenuLink} href="#" aria-label='Pagina inicial' title='Home'>
                <HouseIcon />
            </a>
             <a className={styles.MenuLink} href="#" aria-label='Ver Histórico' title='Histórico'>
                <HistoryIcon />
            </a>
             <a className={styles.MenuLink} href="#" aria-label='Configurações' title='Configurações'>
                <SettingsIcon />
            </a>
             <a className={styles.MenuLink} href="#" aria-label='Mudar o Tema' title='Mudar o Tema' onClick={handleThemeChange}>
              {nextThemeIcom[theme]}
            </a>
        </nav>
    );
}