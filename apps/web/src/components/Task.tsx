'use client'

import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function Task({
    taskId,
    taskTitle,
    taskDescription,
    taskStatus
}: {taskId: number, taskTitle: string, taskDescription: string, taskStatus: string}) {

    const [status, setStatus] = useState(`${taskStatus}`);

    const handleButtonClick = async () => {

        const response = await axios({
            method: "PATCH",
            url: `http://localhost:4000/tasks/${taskId}/status`,
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            data: {
                status: `${status == "OPEN" ? "CLOSED" : "OPEN"}`
            }
        });

        if(status=='OPEN') {
            setStatus('CLOSED');
        } else setStatus('OPEN');
    }

    return (
        <div className={`flex flex-col gap-2 ${status=="OPEN"?'bg-lime-300/50':'bg-gray-300/50'}  rounded-xl m-5 p-4`}>
            <span className={`font-bold text-xl`}>{taskTitle}</span>
            <span>{taskDescription}</span>
            <Button variant="outlined" onClick={handleButtonClick}>
                {
                    status == 'OPEN' ? `FINISH` : `RE-OPEN`
                }</Button>
        </div>
    )
}