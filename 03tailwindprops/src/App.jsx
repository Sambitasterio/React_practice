import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className='inline-block bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    
    <a href="#" class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
    <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5>
    <p class="text-body">Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.</p>
    </a>

   </>
  )
}

export default App
