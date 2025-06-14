import search from "../../assets/icons/search.png";
import close from "../../assets/icons/close.svg";
import back from "../../assets/icons/back.png";

const Button = ({type, onClick}) => {
    return (
        <button onClick={onClick}>
            <img src={type == 'search' ? search : type == 'close' ? close : type == 'back' ? back : search} alt="" />
        </button>
    );
}

export default Button;