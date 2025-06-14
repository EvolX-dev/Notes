import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import AddNoteBtn from "./components/AddNoteBtn/AddNoteBtn";
import Dialog from "./components/Dialog/Dialog";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [searchMode, setSearchMode] = useState(false);
    const [gridMode, setGridMode] = useState(true);
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [currentNoteId, setCurrentNoteId] = useState();
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
    
    

    const endUpdate = () => {
        const updatedNotes = notes.map(item => 
            item.id === currentNoteId ? {
                ...item,
                title: title ? title : 'Нет Заголовки',
                descr: note ? note : 'Нет Заметки',
                data: new Date().toLocaleDateString(),
            } : item
        );
        setNotes(updatedNotes);
        setTitle('');
        setNote('');
        setShowModal(false);
        setIsEdit(false);
    }

    const editNote = (note) => {
        setTitle(note.title);
        setNote(note.descr);
        setIsEdit(true);
        setShowModal(true);
        setCurrentNoteId(note.id);
    };

    const addNote = () => {
         const newNote = {
                id: Date.now(),
                title: title ? title : 'Нет Заголовка',
                descr: note ? note : 'Нет Заметки',
                data: new Date().toLocaleDateString(),
        };
        setNotes([...notes, newNote]);
        setTitle('');
        setNote('');
        setShowModal(false);
        setIsEdit(false); 
    };
    
    
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.descr.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <NavBar 
                searchMode = {searchMode} 
                setSearchMode = {setSearchMode} 
                searchQuery = {searchQuery} 
                setSearchQuery = {setSearchQuery} 
            />

            <Main 
                editNote = {editNote}
                gridMode = {gridMode} 
                setGridMode = {setGridMode} 
                notes = {filteredNotes} 
                deleteNote = {deleteNote} 
            />
            <AddNoteBtn setShowModal = {setShowModal}/>

            <Dialog 
                endUpdate = {endUpdate}
                isEdit = {isEdit}
                setIsEdit = {setIsEdit}
                showModal = {showModal} 
                setShowModal = {setShowModal}
                addNote = {addNote}
                title = {title}
                setTitle = {setTitle}
                note = {note}
                setNote = {setNote}
            />
        </>
    )
}
export default App;