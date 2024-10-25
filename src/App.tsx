import { FormEvent, useEffect, useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName'
import Resource from './components/Resource'
import { Resourceprops } from './components/Resource'
function App() {
  
  const handleIncrement=(increment:number, resource:number, callback:(value:number)=>void)=>{
    callback(resource+increment);
  }

  const load=(resource:string)=>{
    const saved = localStorage.getItem(resource);
    return saved ? Number(saved) : 0;
  }
  const [Megacredit, setMegacredit] = useState<number>(load("megacredit"))
  const [MegacreditProduction, setMegacreditProduction] = useState<number>(load("megacreditProduction"))
   const MegacreditObj:Resourceprops = 
  {name:"Megacredit",
  amount:Megacredit,
  production:MegacreditProduction,
  onAmountChange:(increment:number)=>handleIncrement(increment,Megacredit,setMegacredit),
  onProductionChange: (increment:number)=>handleIncrement(increment,MegacreditProduction,setMegacreditProduction)}
 //Acél
  const [Steel, setSteel] = useState<number>(load("steel"))
  const [SteelProduction, setSteelProduction] = useState<number>(load("steelProduction"))
  const SteelObj:Resourceprops = 
  {name:"Steel",
   amount:Steel,
   production:SteelProduction,
   onAmountChange:(increment:number)=>handleIncrement(increment,Steel,setSteel),
  onProductionChange:(increment:number)=>handleIncrement(increment,SteelProduction,setSteelProduction)}
 //Titán
 const [Titan, setTitan] = useState<number>(load('titan'))
 const [TitanProduction, setTitanProduction] = useState<number>(load('titanProduction'))
 const TitanObj:Resourceprops = 
 {name:"Titan",
  amount:Titan,
  production:TitanProduction,
  onAmountChange:(increment:number)=>handleIncrement(increment,Titan,setTitan),
  onProductionChange:(increment:number)=>handleIncrement(increment,TitanProduction,setTitanProduction)
}

const handleSubmit=(e:FormEvent)=>{
  e.preventDefault();
  setMegacredit(Megacredit+MegacreditProduction);
  setSteel(Steel+SteelProduction);
  setTitan(Titan+TitanProduction);
}

useEffect(()=>{
  localStorage.setItem("megacredit", Megacredit.toString());
  localStorage.setItem("megacreditProduction", MegacreditProduction.toString());
  localStorage.setItem("steel", Steel.toString());
  localStorage.setItem("steelProduction", SteelProduction.toString());
  localStorage.setItem("titan", Titan.toString());
  localStorage.setItem("titanProduction", TitanProduction.toString());
},[Megacredit, MegacreditProduction,Steel,SteelProduction, Titan, TitanProduction])

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
