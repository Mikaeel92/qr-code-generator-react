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
    <div className='flex flex-col gap-4 items-center justify-center'>
     <h1 className='text-3xl font-bold text-pink-600 mt-12'>QR Code Generator</h1>
     <div className='flex flex-col gap-4'>
      <input className='border-gray-400 border rounded-md px-4 py-2' 
      type='text' 
      placeholder='Enter Your Name' 
      value={input} 
      onChange={(e) => setInput(e.target.value)}/>
      <button disabled={input && input.trim !== '' ? false : true} 
      onClick={handleClick} 
      className='bg-gray-700 hover:bg-black text-white rounded-md my-2 px-4 py-2'>Generate</button>
      </div>
      <div>
      <QRCode value={qrCode} size={400}/>
      </div>
    </div>
  )
}

export default App