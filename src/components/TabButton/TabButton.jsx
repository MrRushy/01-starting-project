import './TabButton.css';

export default function TabButton({children, onSelect, isSelected}){ //props in {}
    //closure
    return(
        <li>
            <button className= {isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}