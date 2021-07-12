import axios from "axios"
import { useEffect, useState } from 'react'
import './sidebar.css'


export default function Sidebar() {
    const [cats, setCats ] = useState([])

    useEffect(()=> {
        const getCats = async () =>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    })

    return (
        <div className = "sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
               
               <p>
                   this is about me content position
               </p>
           </div>
           <div className="sidebarItem">
               <div className="sidebarTitle">
                   categories
               </div>
               <ul className="sidebarList">
                   {cats.map(c => (
                        <li className="sidebarListItem" key={c.name}>{c.name}</li>
                   ))}
                 
               </ul>
           </div>
           <div className="sidebarItem">
               <div className="sidebarTitle">FOLLOW US</div>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
           </div>
        </div>
    )
}
