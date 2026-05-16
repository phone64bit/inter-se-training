'use client'

import axios from "axios";
import { ChangeEvent, useState } from "react";
import { TextField, Button } from '@mui/material';

type taskData = {
    title: string;
    description: string;
};

export default function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    
    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const sendTaskData = async () => {
        if(title == "" || description == "") return;
        const res = await axios({
            method: "POST",
            url: `http://localhost:4000/tasks`,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                title,
                description
            } as taskData
        });
        console.log(res.data);
        setTitle("");
        setDescription("");
    }

    return (
        <div className="flex flex-row gap-3">
            <TextField id="task_title" label="Title" variant="filled" onChange={handleTitleChange}/>
            <TextField id="task_description" label="Description" variant="filled" onChange={handleDescriptionChange}/>
            <Button variant="contained" onClick={sendTaskData}>Create</Button>
        </div>
    );
}