import { motion } from 'framer-motion';

const NoteListItem = ({ note, deleteNote, editNote }) => {
    return (
        <motion.div
            className="note__list-item"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            <div className="note__list-item-header">
                <h4>{note.title}</h4>
                <span>{note.data}</span>
            </div>
            <p>{note.descr}</p>
            <div className="note__list-item-btns">
                <motion.button
                    className="btn-edit"
                    onClick={() => editNote(note)}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    <span>Править</span>
                </motion.button>
                <motion.button
                    className="btn-delete"
                    onClick={() => deleteNote(note.id)}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    <span>Удалить</span>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default NoteListItem;
