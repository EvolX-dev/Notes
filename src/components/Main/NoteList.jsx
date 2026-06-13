import { AnimatePresence, motion } from 'framer-motion';
import NoteListItem from './NoteListItem';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const NoteList = ({ gridMode, notes, deleteNote, editNote }) => {
    return (
        <section className={`note__list ${gridMode ? '' : 'list'}`}>
            {notes.length === 0 ? (
                <motion.div
                    className="empty-state"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                    <h3>Нет заметок</h3>
                    <p>Нажмите кнопку + чтобы создать первую заметку</p>
                </motion.div>
            ) : (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    style={{ display: 'contents' }}
                >
                    <AnimatePresence mode="popLayout">
                        {notes.map((note) => (
                            <NoteListItem
                                key={note.id}
                                note={note}
                                deleteNote={deleteNote}
                                editNote={editNote}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </section>
    );
};

export default NoteList;
