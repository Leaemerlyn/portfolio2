import './Button.css'

function onEnter(e){
    let color = "hsl(" + Math.floor(Math.random()*360) + ", 35%, 63%)"
    e.target.style.backgroundColor = color;
    e.target.style.color = "white";
    e.target.style.borderColor = color;
}

function onExit(e){
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
    e.target.style.borderColor = "";
}

export function Button (props){
    return(
        <a className="btn my-button" role="button" href={props.href} target='_blank' onMouseEnter={onEnter} onMouseLeave={onExit}>{props.buttonText}</a>
    )
}