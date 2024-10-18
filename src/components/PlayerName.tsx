import { FormEvent, useState } from 'react'

const PlayerName = () => {
    const [isPLayerEdit, setPlayerEdit] = useState<boolean>(true);
    const [PlayerName, setPlayerName] = useState('Player Name')

    const handlePlayerEdit = ()=>{
      setPlayerEdit(!isPLayerEdit)
    }

    const handleChangePlayerName=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setPlayerName(e.target.value)
    }

    const handleSubmit=(e:FormEvent)=>{
      e.preventDefault();
      handlePlayerEdit();
    }

  return (
    <div>{isPLayerEdit?
        (<div onClick={handlePlayerEdit} className="playerName">
         <h1>{PlayerName}</h1>
        </div>)
        :
        (
         <form onSubmit={handleSubmit} className='playerInput'>
           <input type="text" name="" id="" value={PlayerName} onChange={handleChangePlayerName}/>
           <button type='submit'>Save</button>
         </form>
        )}</div>
  )
}

export default PlayerName