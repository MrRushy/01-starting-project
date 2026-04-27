import './TabButton.css';

export default function TabButton({children, isSelected, ...props}){ //props in {}
    //closure
    return(
        <li>
            <button className= {isSelected ? 'active' : ''} {...props}>
                {children}
                </button>
        </li>
    )
}