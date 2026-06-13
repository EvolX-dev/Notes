import { motion } from 'framer-motion';
import './AddNoteBtn.css';

const AddNoteBtn = ({ setShowModal }) => {
    return (
        <motion.button
            className="add__note-btn"
            onClick={() => setShowModal(true)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 20 }}
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
        </motion.button>
    );
};

export default AddNoteBtn;
