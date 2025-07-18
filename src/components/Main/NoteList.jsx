import NoteListItem from "./NoteListItem";

// eslint-disable-next-line react/prop-types
const NoteList = ({gridMode, notes, deleteNote, editNote}) => {
    return (
        <section className={`note__list container ${gridMode ? '' : 'list'}`}>     
            {
                // eslint-disable-next-line react/prop-types
                notes?.map((note, index) => (
                    <NoteListItem gridMode = {gridMode} key={index} note = {note} deleteNote = {deleteNote} editNote = {editNote} />
                ))
            }
        </section>
    );
}

export default NoteList;