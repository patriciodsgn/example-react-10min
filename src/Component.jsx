import React, {useState} from 'react'

export default function Component() {
  
  const [text, setText] = useState()
  const [updated, setUpdated] = useState()
  const textOnChange = (event) => {
    setText(event.target.value)
  }
  const buttononClick = (event) => {
    setUpdated(text)
  }

  return (
    <div>
      <div>soy un Component nuevo</div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttononClick}>Actualizar</button>
      <p>texto input: {text}</p>
      <p>texto actualizado: {updated}</p>
    </div>
  )
}
