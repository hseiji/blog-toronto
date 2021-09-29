import React from 'react'
import "./singlepost.css";

export default function SinglePost() {
    return (
        <div className="singlepost">
            <img 
                className="postImg"
                src="https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="" 
            />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCat">Food</span>
                    <span className="postCat">Places</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                </span>
                <span className="postDate">
                    1 hour ago
                </span>
                <p className="postDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, fugiat suscipit. Laboriosam ab adipisci voluptas magni, quas explicabo natus odit eaque consequatur aut autem cumque recusandae voluptatum? Tempore, unde iure?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, fugiat suscipit. Laboriosam ab adipisci voluptas magni, quas explicabo natus odit eaque consequatur aut autem cumque recusandae voluptatum? Tempore, unde iure?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, fugiat suscipit. Laboriosam ab adipisci voluptas magni, quas explicabo natus odit eaque consequatur aut autem cumque recusandae voluptatum? Tempore, unde iure?
                </p>
            </div>
        </div>
    )
}
