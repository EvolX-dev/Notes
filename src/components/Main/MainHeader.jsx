const MainHeader = ({gridMode, setGridMode}) => {
    return (
        <section className="main__header container">
            <h2>Все заметки</h2>
            <button onClick={() => setGridMode(!gridMode)}>     
                {
                    gridMode
                    ?
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 14H6C6.55 14 7 13.55 7 13V11C7 10.45 6.55 10 6 10H4C3.45 10 3 10.45 3 11V13C3 13.55 3.45 14 4 14ZM4 19H6C6.55 19 7 18.55 7 18V16C7 15.45 6.55 15 6 15H4C3.45 15 3 15.45 3 16V18C3 18.55 3.45 19 4 19ZM4 9H6C6.55 9 7 8.55 7 8V6C7 5.45 6.55 5 6 5H4C3.45 5 3 5.45 3 6V8C3 8.55 3.45 9 4 9ZM9 14H20C20.55 14 21 13.55 21 13V11C21 10.45 20.55 10 20 10H9C8.45 10 8 10.45 8 11V13C8 13.55 8.45 14 9 14ZM9 19H20C20.55 19 21 18.55 21 18V16C21 15.45 20.55 15 20 15H9C8.45 15 8 15.45 8 16V18C8 18.55 8.45 19 9 19ZM8 6V8C8 8.55 8.45 9 9 9H20C20.55 9 21 8.55 21 8V6C21 5.45 20.55 5 20 5H9C8.45 5 8 5.45 8 6Z" fill="#6750A4" />
                    </svg>
                    :
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 18H3C2.45 18 2 17.55 2 17V14H6V18ZM6 12H2V8H6V12ZM6 6H2V3C2 2.45 2.45 2 3 2H6V6ZM12 18H8V14H12V18ZM12 12H8V8H12V12ZM12 6H8V2H12V6ZM17 18H14V14H18V17C18 17.55 17.55 18 17 18ZM18 12H14V8H18V12ZM18 6H14V2H17C17.55 2 18 2.45 18 3V6Z" fill="#6750A4" />
                    </svg>     
                }    
                <span>
                    {
                        gridMode
                        ?
                        'Список'
                        :
                        'Сетка'
                    }
                </span>
            </button>
        </section>
    )
}

export default MainHeader;