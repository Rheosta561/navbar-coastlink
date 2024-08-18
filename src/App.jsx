import { useState } from 'react'
import Navbar from './navbar'
import './nav.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <div className='body'>
        {/* Displaying the navbar first */}
        <Navbar>Hi</Navbar>

      </div>
    </>
  )
}

export default App
