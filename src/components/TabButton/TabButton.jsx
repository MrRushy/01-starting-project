import './TabButton.css';

export default function TabButton({children}){
    function handleClick(){
        console.log("Hello World");
    }
    //closure
    return(
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}