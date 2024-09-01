"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    // alert(`Form Submitted! Title : ${title}, Description : ${desc}`)

    if (title.length > 0 && desc.length > 0) {
      setmainTask([...mainTask, { title, desc }])

      console.log(mainTask)

      settitle("")
      setdesc("")
    }else{
      alert("Task is empty!")
    }
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li>
          <div className='flex items-center justify-between mb-5'>
            <h2 className='text-2xl font-semibold'>{t.title}</h2>
            <p className='text-xl font-semibold'>{t.desc}</p>
            <button
              className='bg-red-400 text-white px-4 py-2 rounded font-bold'
              onClick={() => {
                deleteHandler(i)
              }}
            >Delete</button>
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Todo List - Using React</h1>
      <form className='flex justify-center' onSubmit={submitHandler}>
        <input
          type="text"
          className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded'
          placeholder='Enter Task here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
            // console.log(e.target.value)
            // console.log(e.target.style.color="red")
          }}
        />
        <input
          type="text"
          className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
            // console.log(e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page
