import Button from './Button';
import './NavBar.css';


const NavBar = ({searchMode, setSearchMode, searchQuery, setSearchQuery}) => {
    
    
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__content">
                    {
                        searchMode
                        ? 
                        <Button type='back' onClick={() => {setSearchQuery(''); setSearchMode(false);}}/> 
                        :
                        <div></div>
                    }
                    {
                        searchMode
                        ? 
                        <input 
                            type = 'text' 
                            placeholder = 'Поиск...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        :
                        <h1>Заметки</h1>
                    }
                    {
                        searchMode
                        ?
                        <Button type='close' onClick={() => {setSearchQuery(''); setSearchMode(false);}}/>  
                        :
                        <Button type='search' onClick={() => setSearchMode(true)}/> 
                    }
                </div>
            </nav>
        </header>
    );
}

export default NavBar;