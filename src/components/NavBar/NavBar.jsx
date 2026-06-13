import { motion, AnimatePresence } from 'framer-motion';
import NavBtn from './Button';
import './NavBar.css';

const NavBar = ({ searchMode, setSearchMode, searchQuery, setSearchQuery }) => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__content">
                    <AnimatePresence mode="wait">
                        {searchMode ? (
                            <motion.div
                                key="search"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.15 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}
                            >
                                <NavBtn type="back" onClick={() => { setSearchQuery(''); setSearchMode(false); }} />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Поиск заметок..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <NavBtn type="close" onClick={() => { setSearchQuery(''); setSearchMode(false); }} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="title"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                            >
                                <h1>Заметки</h1>
                                <NavBtn type="search" onClick={() => setSearchMode(true)} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
