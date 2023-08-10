const Button=(props)=>{
    const{btnName=props.children,onClick,marked}=props;
    return(
<button onClick={onClick} disabled={marked} className="btn">{btnName }</button>
    )
}
export default Button;