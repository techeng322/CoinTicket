'use client';
import React from 'react';
import { MdOutlineClose } from "react-icons/md";

interface AlertProps {
    icon: React.ReactNode
    text: React.ReactNode; // The content inside the alert
}

const Alert: React.FC<AlertProps> = ({ icon, text }) => {
    return (
        <div className="rounded-[5px] border border-red p-4 flex flex justify-between items-center">
            <div className="flex items-center gap-2 ">
                {icon}
                {text}
            </div>
            <span className="mr-2 p-1 text-red-500 hover:text-red-700">
                <MdOutlineClose />
            </span>
        </div>
    );
};

export default Alert;