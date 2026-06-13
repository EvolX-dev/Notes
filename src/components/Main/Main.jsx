import MainHeader from './MainHeader';
import NoteList from './NoteList';
import './main.css';

const Main = ({ gridMode, setGridMode, notes, deleteNote, editNote }) => {
    return (
        <main className="main">
            <div className="container">
                <MainHeader gridMode={gridMode} setGridMode={setGridMode} notesCount={notes.length} />
                <NoteList gridMode={gridMode} notes={notes} deleteNote={deleteNote} editNote={editNote} />
            </div>
        </main>
    );
};

export default Main;
