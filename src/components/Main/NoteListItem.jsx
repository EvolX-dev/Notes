/* eslint-disable react/prop-types */

const NoteListItem = ({gridMode, note, deleteNote, editNote}) => {
    return (
        <div className={`note__list-item`}>
            <div className={`note__list-item-header ${gridMode ? '' : 'list'}`}>
                <h4>{note.title}</h4>
                <span>{note.data}</span>
            </div>
            <p>
                {note.descr}
            </p>
            <div className="note__list-item-btns">
                <button onClick={() => editNote(note)}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.06 0.590001L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L4.18 18H0V13.82L10.4 3.41L13.23 0.590001C14.01 -0.189999 15.28 -0.189999 16.06 0.590001ZM2 16L3.41 16.06L13.23 6.23L11.82 4.82L2 14.64V16Z" fill="#6750A4" />
                    </svg>
                    <span>РЕДАКТИРОВАТЬ</span>
                </button>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#CF1B1B" />
                    </svg>
                    <span onClick={() => deleteNote(note.id)}>Удалить</span>
                </button>
            </div>

        </div>
    );
}

export default NoteListItem;