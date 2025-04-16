import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { mockData } from '../data/mockData';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [contacts, setContacts] = useState(mockData.contacts);
  const [groups, setGroups] = useState(mockData.groups);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('messages');
    return saved ? JSON.parse(saved) : mockData.messages;
  });
  const [currentChat, setCurrentChat] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (content, type) => {
    if (!currentChat) return;
    const newMessage = {
      sender: 'You',
      content,
      type,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => ({
      ...prev,
      [currentChat.id]: [...(prev[currentChat.id] || []), newMessage],
    }));
  };

  return (
    <ChatContext.Provider
      value={{
        contacts,
        groups,
        messages,
        currentChat,
        setCurrentChat,
        sendMessage,
        lightboxImage,
        setLightboxImage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};