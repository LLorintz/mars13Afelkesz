export type Resourceprops = {
    name:string,
    amount: number,
    onAmountChange:(increment:number)=>void,
}


const Resource = (props:Resourceprops) => {
  return (
    <div className="resourceContainer">
    <p>{props.name}: <span>{props.amount}</span></p>
    <div className="buttonContainer">
      <button type="button" onClick={()=>props.onAmountChange(-1)}>-</button>
      <button type="button"onClick={()=>props.onAmountChange(+1)}>+</button>
    </div>
   </div>
  )
}

export default Resource