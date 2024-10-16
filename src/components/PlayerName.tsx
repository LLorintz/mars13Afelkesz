import { useState } from 'react'

const PlayerName = () => {
    const [isPLayerEdit, setPlayerEdit] = useState<boolean>(true);

    const handlePlayerEdit = ()=>{
      setPlayerEdit(!isPLayerEdit)
    }
  return (
    <div>{isPLayerEdit?
        (<div onClick={handlePlayerEdit} className="playerName">
         <h1>Player Name</h1>
        </div>)
        :
        (
         <form>
           <input type="text" name="" id="" />
           <button type='button'>Save</button>
         </form>
        )}</div>
  )
}

export default PlayerName