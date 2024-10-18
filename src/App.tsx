import { useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName'
import Resource from './components/Resource'
import { Resourceprops } from './components/Resource'
function App() {

  const [Megacredit, setMegacredit] = useState<number>(0)
  const handleMegacreditChange=(increment:number)=>{setMegacredit(Megacredit+increment)}
  const MegacreditObj:Resourceprops = {name:"Megacredit",amount:Megacredit,onAmountChange:handleMegacreditChange,}
 //Acél
  const [Steel, setSteel] = useState<number>(0)
  const handleSteelChange=(increment:number)=>{setSteel(Steel+increment)}
  const SteelObj:Resourceprops = {name:"Steel",amount:Steel,onAmountChange:handleSteelChange,}
 //Titán
 const [Titan, setTitan] = useState<number>(0)
 const handleTitanChange=(increment:number)=>{setTitan(Steel+increment)}
 const TitanObj:Resourceprops = {name:"Titan",amount:Titan,onAmountChange:handleTitanChange,}
 //Plants
 
 //Energia
 //Hő


  return (
    <div className="container">
       <PlayerName></PlayerName>
       <Resource {...MegacreditObj}></Resource>
       <Resource {...SteelObj}></Resource>
       <Resource {...TitanObj}></Resource>   
    </div>
  )
}

export default App
