import React from 'react';
import './Header.scss';

interface HeaderProps {
    isDarkTheme: boolean;
    onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, onToggleTheme }) => {
    return (
        <header className="portfolio-header" role="banner">
            <h1 className="portfolio-title">2025 이수민 포트폴리오</h1>
            <button 
                className="theme-toggle" 
                onClick={onToggleTheme}
                aria-label={isDarkTheme ? '라이트 테마로 변경' : '다크 테마로 변경'}
                type="button"
            >
                {isDarkTheme ? '🌞 Light' : '🌙 Dark'}
            </button>
        </header>
    );
};

export default Header;