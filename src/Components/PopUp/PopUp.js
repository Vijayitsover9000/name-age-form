import "./PopUp.css";
export default function PopUp(props) {
    function handleClick(event){
        props.removePop();
    }
  return (
    <div className="popup">
        <div className = "head">INVALID INPUT</div>
        <div className ="bod">{props.text}</div>
        <button className="but" onClick = {handleClick}>Okay</button>
    </div>
  );
}
