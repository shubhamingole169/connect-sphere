import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.div
      className="theme-toggle"
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <img
        src={theme === 'light' ? '/sun.svg' : '/moon.svg'}
        alt={theme === 'light' ? 'Sun icon' : 'Moon icon'}
        className="theme-icon"
      />
    </motion.div>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;