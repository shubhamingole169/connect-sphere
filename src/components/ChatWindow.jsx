import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/ChatContext';
import MessageInput from './MessageInput';
import Lightbox from './Lightbox';
import { motion } from 'framer-motion';

function ChatWindow() {
  const { currentChat, messages, setLightboxImage } = useContext(ChatContext);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!currentChat) {
    return <div className="chat-window">Select a chat to start messaging!</div>;
  }

  return (
    <div className="chat-window">
      <h2>{currentChat.name}</h2>
      <div className="messages">
        {messages[currentChat.id]?.map((msg, index) => (
          <motion.div
            key={index}
            className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {msg.type === 'text' ? (
              <p>{msg.content}</p>
            ) : (
              <img
                src={msg.content}
                alt="Shared media"
                onClick={() => setLightboxImage(msg.content)}
                loading="lazy"
              />
            )}
            <span className="sender">{msg.sender}</span>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput />
      <Lightbox />
    </div>
  );
}

ChatWindow.propTypes = {};

export default ChatWindow;