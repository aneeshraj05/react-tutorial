import React from 'react'
import { useState } from 'react'

const App = () => {
  const[color,setColor]=useState('white')
  return (
    <div className='h-screen w-full flex flex-wrap justify-center items-center duration-200' style={{background:color}}>
      <div className="btn  h-[70px] max-w-[300px]  fixed  p-3 bottom-[100px] flex flex-wrap rounded-[30px] gap-1.5 bg-white shadow-2xl">
      
      <button className='bg-red-500 rounded-[10px] w-[50px]  ' onClick={()=>setColor('red')}>red</button>
            <button className='bg-green-500 rounded-[10px] w-[50px] ' onClick={()=>setColor('green')}>green</button>

      </div>
    </div>
  )
}

export default App
