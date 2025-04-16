import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import ThemeToggle from '../components/ThemeToggle';
import { motion } from 'framer-motion';

function Home({ theme, setTheme }) {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="main-content">
        <Sidebar />
        <ChatWindow />
      </div>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </motion.div>
  );
}

export default Home;