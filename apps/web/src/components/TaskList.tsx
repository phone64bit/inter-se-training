'use client'

import { useState } from "react";
import Task from "./Task";
import axios from "axios";

export default function TaskList() {

    const [task, setTask] = useState([]);

    const fetchTask = async () => {
        const response = await axios({
            method: "GET",
            url: "http://localhost:4000/tasks",
            withCredentials: true
        })
        setTask(response.data);
        console.log(response.data)
    }

    if(task.length == 0) {
        fetchTask();
        return (
            <div>Loading...</div>
        )
    } else return (
        <div>
            {
                task.map((data, i) => (
                    <Task key={i} taskId={data.id} taskTitle={`${data.title}`} taskDescription={`${data.description}`} taskStatus={`${data.status}`}></Task>
                ))
            }
        </div>
    )
}