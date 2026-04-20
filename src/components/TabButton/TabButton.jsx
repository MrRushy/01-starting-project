import './TabButton.css';

export default function TabButton({children, onSelect}){
    //closure
    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}