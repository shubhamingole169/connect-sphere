import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/ChatContext';
import { motion } from 'framer-motion';

function Lightbox() {
  const { lightboxImage, setLightboxImage } = useContext(ChatContext);

  if (!lightboxImage) return null;

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setLightboxImage(null)}
      role="dialog"
      aria-label="Image lightbox"
    >
      <img src={lightboxImage} alt="Enlarged media" />
    </motion.div>
  );
}

Lightbox.propTypes = {};

export default Lightbox;