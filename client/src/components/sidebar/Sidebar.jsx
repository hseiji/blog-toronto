import React from 'react'
import "./sidebar.css"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About</span>
                <img 
                    src="https://upload.travelawaits.com/ta/uploads/2021/04/be9ded01f8f1aadfe83f9dbda76fcbe9ded-800x800.jpg" 
                    alt="" 
                />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ut, dignissimos quisquam modi et nobis numquam sapiente est tenetur perferendis quia mollitia, beatae excepturi quam, dolor nisi iusto unde esse?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Foods</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us:</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
