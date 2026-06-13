import { useState, useEffect } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import AddNoteBtn from "./components/AddNoteBtn/AddNoteBtn";
import Dialog from "./components/Dialog/Dialog";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [searchMode, setSearchMode] = useState(false);
    const [gridMode, setGridMode] = useState(true);
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [currentNoteId, setCurrentNoteId] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
        if (savedNotes) {
            setNotes(savedNotes);
        }
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }, [notes, isInitialized]);

    const formatDate = () => {
        const now = new Date();
        const day = now.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
        const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        return `${day}, ${time}`;
    };

    const getNoteData = () => ({
        id: Date.now(),
        title: title.trim() || 'Без заголовка',
        descr: note.trim() || 'Пустая заметка',
        data: formatDate(),
    });

    const addNote = () => {
        const newNote = getNoteData();
        setNotes(prev => [newNote, ...prev]);
        resetForm();
    };

    const endUpdate = () => {
        setNotes(prev =>
            prev.map(item =>
                item.id === currentNoteId
                    ? { ...item, title: title.trim() || 'Без заголовка', descr: note.trim() || 'Пустая заметка', data: formatDate() }
                    : item
            )
        );
        resetForm();
    };

    const editNote = (note) => {
        setTitle(note.title);
        setNote(note.descr);
        setIsEdit(true);
        setShowModal(true);
        setCurrentNoteId(note.id);
    };

    const deleteNote = (id) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    };

    const resetForm = () => {
        setTitle('');
        setNote('');
        setShowModal(false);
        setIsEdit(false);
        setCurrentNoteId(null);
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.descr.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <NavBar
                searchMode={searchMode}
                setSearchMode={setSearchMode}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <Main
                editNote={editNote}
                gridMode={gridMode}
                setGridMode={setGridMode}
                notes={filteredNotes}
                deleteNote={deleteNote}
            />

            <AddNoteBtn setShowModal={setShowModal} />

            <Dialog
                endUpdate={endUpdate}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                showModal={showModal}
                setShowModal={setShowModal}
                addNote={addNote}
                title={title}
                setTitle={setTitle}
                note={note}
                setNote={setNote}
            />
        </>
    );
};

export default App;
