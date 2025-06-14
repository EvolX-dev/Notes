import './Dialog.css';

const Dialog = ({showModal, setShowModal, addNote, title, setTitle, note, setNote, isEdit, setIsEdit, endUpdate}) => {  
    if (!showModal) {
        return (
            <></>
        );
    }  
    return (
        <div className="dialog">
            <div className="dialog__modal">
                <h3>
                    {
                        isEdit 
                        ? 
                        'Изменить заметку' 
                        :
                        'Добавить заметку'
                    }
                </h3>
                <div className="dialog__modal-input">
                    <span>Заголовок</span>
                    <input 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text" 
                        placeholder='Заголовок'
                    />
                </div>
                <div className="dialog__modal-input">
                    <span>Заметка</span>
                    <input 
                        onChange={(e) => setNote(e.target.value)}
                        value={note}
                        type="text"
                        placeholder='Заметка' 
                    />
                </div>

                <div className="dialog__modal-cotrol">
                    <button 
                        onClick={() => { setShowModal(false); setIsEdit(false) }}
                    >
                        Отмена
                    </button>
                    <button onClick=
                        {
                            isEdit
                            ? endUpdate
                            : addNote
                        }>
                            { isEdit ? 'Изменить' : 'Добавить' }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;