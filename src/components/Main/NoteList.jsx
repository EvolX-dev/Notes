import NoteListItem from "./NoteListItem";

const NoteList = ({gridMode, notes, deleteNote, editNote}) => {
    return (
        <section className={`note__list container ${gridMode ? '' : 'list'}`}>     
            {
                notes?.map((note, index) => (
                    <NoteListItem gridMode = {gridMode} key={index} note = {note} deleteNote = {deleteNote} editNote = {editNote} />
                ))
            }
        </section>
    );
}

export default NoteList;