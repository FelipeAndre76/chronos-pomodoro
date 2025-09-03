import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';


export function Menu() {

    return (
    
        <nav className={styles.menu}>
            <a className={styles.MenuLink} href="#">
                <HouseIcon />
            </a>
             <a className={styles.MenuLink} href="#">
                <HistoryIcon />
            </a>
             <a className={styles.MenuLink} href="#">
                <SettingsIcon />
            </a>
             <a className={styles.MenuLink} href="#">
                <SunIcon />
            </a>
        </nav>
    );
}