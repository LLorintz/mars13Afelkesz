import { FormEvent, useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName'
import Resource from './components/Resource'
import { Resourceprops } from './components/Resource'
function App() {

  const [Megacredit, setMegacredit] = useState<number>(0)
  const [MegacreditProduction, setMegacreditProduction] = useState<number>(0)
  const handleMegacreditChange=(increment:number)=>{setMegacredit(Megacredit+increment)}
  const handleMegacreditProductionChange=(increment:number)=>{setMegacreditProduction(MegacreditProduction+increment)}
  const MegacreditObj:Resourceprops = 
  {name:"Megacredit",
  amount:Megacredit,
  production:MegacreditProduction,
  onAmountChange:handleMegacreditChange,
  onProductionChange: handleMegacreditProductionChange}
 //Acél
  const [Steel, setSteel] = useState<number>(0)
  const [SteelProduction, setSteelProduction] = useState<number>(0)
  const handleSteelChange=(increment:number)=>{setSteel(Steel+increment)}
  const handleSteelPRoductionChange=(increment:number)=>{setSteelProduction(SteelProduction+increment)}
  const SteelObj:Resourceprops = 
  {name:"Steel",
   amount:Steel,
   production:SteelProduction,
   onAmountChange:handleSteelChange,
  onProductionChange:handleSteelPRoductionChange}
 //Titán
 const [Titan, setTitan] = useState<number>(0)
 const [TitanProduction, setTitanProduction] = useState<number>(0)
 const handleTitanChange=(increment:number)=>{setTitan(Titan+increment)}
 const handleTitanProductionChange=(increment:number)=>{setTitanProduction(TitanProduction+increment)}
 const TitanObj:Resourceprops = 
 {name:"Titan",
  amount:Titan,
  production:TitanProduction,
  onAmountChange:handleTitanChange,
  onProductionChange:handleTitanProductionChange
}

const handleSubmit=(e:FormEvent)=>{
  e.preventDefault();
  setMegacredit(Megacredit+MegacreditProduction);
  setSteel(Steel+SteelProduction);
  setTitan(Titan+TitanProduction);
}

  return (
    <form onSubmit={handleSubmit} className="container">
       <PlayerName></PlayerName>
       <Resource {...MegacreditObj}></Resource>
       <Resource {...SteelObj}></Resource>
       <Resource {...TitanObj}></Resource> 
       <button type='submit' className='btn'>Next round</button>  
    </form>
  )
}

export default App
