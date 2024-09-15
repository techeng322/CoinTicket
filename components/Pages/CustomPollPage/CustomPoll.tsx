'use client'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { FaPlusCircle } from "react-icons/fa";

const CustomPollPage = () => {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState([''])
  const handleOptionChange = (e, i) => {
    const temp = [...options]
    temp[i] = e.target.value
    setOptions(temp)
  }

  const addOption = () => {
    let temp = [...options];
    temp = [...temp, ""]
    setOptions(temp)
  }

  const deleteOption = (i) => {
    const temp = [...options]
    delete temp[i]
    setOptions(temp)
  }

  return (
    <div className="w-full p-8 relative">
      <div className="flex justify-center relative items-center text-lg font-bold">
        <button className="absolute left-0 cursor-pointer">
          <FaArrowLeft />
        </button>
        Create Your Custom Poll
      </div>
      <div className="mt-4 min-h-[400px]">
        <textarea
          placeholder="Type your question ..."
          value={question}
          className="w-full p-4 overflow-hidden rounded-lg h-[100px] focus:outline-none focus:border-none"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex flex-col gap-y-4 mt-4">
          {options.map((option, i) => {
            return (
              <input
                key={`option ${i}`}
                placeholder={`Option ${i}`}
                className="p-4 w-full rounded-lg focus:outline-none focus:border-none font-poppins_regular text-[14px]"
                value={option}
                onChange={(e) => handleOptionChange(e, i)}
              />
            )
          })}
        </div>
        <div className='flex justify-center p-4'>
          <button className='active:scale-[1.0.5]'>
            <FaPlusCircle color="#0A1B36" size={30} onClick={addOption}/>
          </button>
        </div>
      </div>
      <div className="mt-10 b-0 w-full l-0 flex gap-4 grid grid-cols-2">
        <button
          className="px-4 py-2 bg-white text-[#0A1B36] font-poppins_bold font-bold rounded-lg active:scale-[1.05]"
          type="button"
        >
          Preview
        </button>
        <button
          className="px-4 py-2 bg-[#0A1B36] text-[white] font-poppins_bold font-bold rounded-lg active:scale-[1.05]"
          type="button"
        >
          Post
        </button>
      </div>
    </div>
  )
}

export default CustomPollPage
