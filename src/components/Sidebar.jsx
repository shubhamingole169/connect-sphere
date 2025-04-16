import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/ChatContext';
import { motion } from 'framer-motion';

function Sidebar() {
  const { contacts, groups, setCurrentChat } = useContext(ChatContext);

  return (
    <aside className="sidebar" aria-label="Contact and group list">
      <h2>Chats</h2>
      <ul>
        {contacts.map((contact) => (
          <motion.li
            key={contact.id}
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentChat(contact)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setCurrentChat(contact)}
          >
            <img src={contact.avatar} alt={`${contact.name}'s avatar`} />
            <span>{contact.name}</span>
          </motion.li>
        ))}
        {groups.map((group) => (
          <motion.li
            key={group.id}
            className="contact-card group"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentChat(group)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setCurrentChat(group)}
          >
            <img src="/star-sticker.svg" alt={`${group.name}'s avatar`} />
            <span>{group.name}</span>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;