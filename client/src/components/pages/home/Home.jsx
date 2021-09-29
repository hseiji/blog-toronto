import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // const res = await axios.get("/posts");    
                fetch('http://localhost:8000/posts')
                .then(response => response.json())
                .then(data => console.log(data));

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchPost();
    }, [])

    return (
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
    )
}
