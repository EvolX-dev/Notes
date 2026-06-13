import { motion, AnimatePresence } from 'framer-motion';
import './Dialog.css';

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: { 
        opacity: 1, scale: 1, y: 0,
        transition: { type: "spring", stiffness: 400, damping: 30 }
    },
    exit: { opacity: 0, scale: 0.92, y: 20, transition: { duration: 0.15 } },
};

const Dialog = ({ showModal, setShowModal, addNote, title, setTitle, note, setNote, isEdit, setIsEdit, endUpdate }) => {
    const handleSubmit = () => {
        if (isEdit) {
            endUpdate();
        } else {
            addNote();
        }
    };

    const handleClose = () => {
        setShowModal(false);
        setIsEdit(false);
    };

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className="dialog-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleClose}
                >
                    <motion.div
                        className="dialog"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>{isEdit ? 'Изменить заметку' : 'Новая заметка'}</h3>

                        <div className="dialog__field">
                            <label>Заголовок</label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Введите заголовок"
                            />
                        </div>

                        <div className="dialog__field">
                            <label>Заметка</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Введите текст заметки"
                                rows={4}
                            />
                        </div>

                        <div className="dialog__actions">
                            <motion.button
                                className="btn-cancel"
                                onClick={handleClose}
                                whileTap={{ scale: 0.95 }}
                            >
                                Отмена
                            </motion.button>
                            <motion.button
                                className="btn-submit"
                                onClick={handleSubmit}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {isEdit ? 'Сохранить' : 'Добавить'}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Dialog;
