import React, { useEffect, useEffectEvent, useState } from 'react'
import { useRef } from 'react';

const Manager = () => {
  const ref = useRef({ site: "", username: "", password: "" })
  const [form, setform] = useState({})
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    let passwordArray;
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])


  const showpassword = () => {
    alert("show the password");
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png"
    }
    else {
      ref.current.src = "icons/eyecross.png"
    }
  }

  const savePassword = () => {
    setpasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form])
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }



  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
      <div className="mycontainer min-h-[88.2vh] p-3">
        <h1 className='text-4xl text font-bold text-center'><span className='text-green-500'> &lt;</span>
          <span>Pass</span><span className='text-green-500'>OP/&gt;</span></h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

        <div className='text-black flex flex-col p-4 gap-8 items-center'>
          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 bg-white w-full text-black p-4 py-1' type="text" name='site' id='' />
          <div className='flex w-full justify-between gap-8'>
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 bg-white w-full text-black p-4 py-1' type="text" name='username' id='' />
            <div className='relative'>

              <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 bg-white w-full text-black p-4 py-1' type="text" name='password' id='' />
              <span className='absolute right-0.75 top-1 cursor-pointer ' onClick={showpassword}>
                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-500 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover" >
            </lord-icon>
            Add Password</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length!=0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className=' bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Song</th>
                <th className='py-2'>Artist</th>
                <th className='py-2'>Year</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              <tr>
                <td className='py-2 border-white text-center w-32'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className='py-2 border-white text-center w-32'>Malcolm Lockyer</td>
                <td className='py-2 border-white text-center w-32'>1961</td>
              </tr>
              <tr>
                <td className='py-2 border-white text-center w-32'>Witchy Woman</td>
                <td className='py-2 border-white text-center w-32'>The Eagles</td>
                <td className='py-2 border-white text-center w-32'>1972</td>
              </tr>
              <tr>
                <td className='py-2 border-white text-center w-32'>Shining Star</td>
                <td className='py-2 border-white text-center w-32'>Earth, Wind, and Fire</td>
                <td className='py-2 border-white text-center w-32'>1975</td>
              </tr>
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager
