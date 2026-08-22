import React from 'react'

const Manager = () => {
  return (
    <>
      <div className=" bg-slate-50 max-w-4xl mycontainer">
        <h1 className='text-4xl text font-bold text-center'><span className='text-green-700'> &lt;</span>
          <span>Pass</span><span className='text-green-700'>OP/&gt;</span></h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

        <div className='text-black flex flex-col p-4 gap-8'>
          <input className='rounded-full border border-green-500 w-full text-black p-4 py-1' type="text" name='' id='' />
          <div className='flex w-full justify-between gap-8'>
            <input className='rounded-full border border-green-500 w-full text-black p-4 py-1' type="text" name='' id='' />
            <input className='rounded-full border border-green-500 w-full text-black p-4 py-1' type="text" name='' id='' />
          </div>
          <button>Add Password</button>
        </div>
      </div>
    </>
  )
}

export default Manager
