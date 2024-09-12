'use client'
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa6"

const CustomPoll = () => {
    const [question, setQuestion] = useState("")
    const [options, setOptions] = useState(["", "", ""])
    const handleOptionChange = (e, i) => {
        const temp = [...options]
        temp[i] = e.target.value
        setOptions(temp)
    }   
    const addOption = () => {
        const temp = [...options]
    }
    console.log("chani", options)
    return (
        <div className="w-full p-4 bg-blue-light_100 min-h-screen relative">
            <div className="flex justify-center relative items-center text-lg font-bold">
                <div className="absolute left-0">
                    <FaArrowLeft />
                </div>
                Create Your Custom Poll
            </div>
            <div className="mt-4">
                <textarea
                    placeholder="Type your question ..."
                    value={question}
                    className="w-full p-2 overflow-hidden rounded-lg h-[100px]"
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <div className="flex flex-col gap-y-2 mt-2">
                    {options.map((option, i) => {
                        return (
                            <input key={`option ${i}`} placeholder={`Option ${i}`} className="p-4 w-full rounded-lg" value={option} onChange={(e) => handleOptionChange(e, i)} />
                        )
                    })}
                </div>
            </div>
            <div className="mt-10 b-0 w-full l-0 flex gap-2 flex justify-center">
                <button className="w-[150px] px-4 py-4 bg-white text-[#1646cd] font-bold rounded-lg" type="button">
                    Preview
                </button>
                <button className="w-[150px] px-4 py-4 bg-[#b5cff9] text-[#1646cd] font-bold rounded-lg" type="button">
                    Post
                </button>
            </div>
        </div>
    )
}

export default CustomPoll