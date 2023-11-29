import React, {useState} from 'react'
import CardForm from './CardForm'

const NewCard = ({addWordCard}) => {
  const [isFormActive, setIsFormActive] = useState(false)
  const handleFormActive=()=>{
    setIsFormActive(true)
  }
  return (
    <div className='card-box new-card'>
      {/* <input type='checkbox'/> */}
      {!isFormActive && <button onClick={handleFormActive}>Add new</button>}
      {isFormActive?<CardForm addWordCard={addWordCard} setIsFormActive={setIsFormActive}/>:null} 
    </div>
  )
}

export default NewCard