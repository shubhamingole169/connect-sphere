import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/ChatContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

function MessageInput() {
  const { currentChat, sendMessage } = useContext(ChatContext);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) {
      toast.error('Type something fun!');
      return;
    }
    sendMessage(message, 'text');
    setMessage('');
    toast.success(
      <div>
        Message sent! <img src="/star-sticker.svg" alt="Star sticker" className="sticker" />
      </div>
    );
  };

  const handleImageUpload = () => {
    const mockImages = [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/200',
      'https://via.placeholder.com/250',
    ];
    const randomImage = mockImages[Math.floor(Math.random() * mockImages.length)];
    sendMessage(randomImage, 'image');
    toast.success('Image shared!');
  };

  if (!currentChat) return null;

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        aria-label="Message input"
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <motion.button
        onClick={handleImageUpload}
        whileTap={{ scale: 0.9 }}
        aria-label="Upload image"
      >
        📷
      </motion.button>
      <motion.button
        onClick={handleSend}
        whileTap={{ scale: 0.9 }}
        aria-label="Send message"
      >
        🚀
      </motion.button>
    </div>
  );
}

MessageInput.propTypes = {};

export default MessageInput;