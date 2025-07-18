import MainHeader from "./MainHeader";
import NoteList from "./NoteList";
import './main.css';
// eslint-disable-next-line react/prop-types
const Main = ({gridMode, setGridMode, notes, deleteNote, editNote}) => {
    return (
        <main className="main">
            <MainHeader gridMode = {gridMode} setGridMode = {setGridMode}/>
            <NoteList gridMode = {gridMode} notes = {notes} deleteNote = {deleteNote} editNote = {editNote}/>
        </main>
    )
}

export default Main;