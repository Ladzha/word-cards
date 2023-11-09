import React, {useState} from 'react'

const CardForm = () => {
  const [inputWord, setInputWord] =useState('');
  const [inputTranslation, setInputTranslation] =useState('');

  const handleInputWord=(event)=>{
    setInputWord(event.target.value)
  }

  const handleInputTranslation=(event)=>{
    setInputTranslation(event.target.value)
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
  }

  return (
    <div className='form-container'>
      <form className='card-form'>
        <input type='text' className='input' value={inputWord} onChange={handleInputWord} />
        <input type='text' className='input' value={inputTranslation} onChange={handleInputTranslation}/>
        
        <select className='select'>
          <option className='option'>
            Learn someday
          </option>
          <option className='option'>
            Learn
          </option>
          <option className='option'>
            Learn ASAP
          </option>
        </select>

        <select className='select'>
          <option className='option'>
            Inbox
          </option>
          <option className='option'>
            Meal
          </option>
          <option className='option'>
            Animal
          </option>
        </select>

        <button className='button button-send' onSubmit={handleSubmit}>Create</button>
      </form>
    </div>
  )
}

export default CardForm