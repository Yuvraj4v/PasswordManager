import React from 'react'

const Manager = () => {
  return (
    <>
    <div className=" bg-slate-50 max-w-4xl mycontainer">
      <h1>PassOP</h1>
      <p>Your own Password Manager</p>
    <div className='text-white flex flex-col p-4'>
      <input className='rounded-full' type="text" name='' id='' />
      <div className='flex'>
        <input type="text" />
        <input type="text" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Manager
