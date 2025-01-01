import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const App = () => {

  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  const handleClick = () => {
    setQrCode(input)
    setInput('')
  }

  return (
    <div>
      <input className='' 
      type='text' 
      placeholder='Enter Your Name Or Anything!' 
      value={input} 
      onChange={(e) => setInput(e.target.value)}/>
      <button disabled={input && input.trim !== '' ? false : true} 
      onClick={handleClick} 
      className=''>Generate</button>
      <QRCode value={qrCode} size={40}/>
    </div>
  )
}

export default App