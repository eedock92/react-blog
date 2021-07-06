import './sidebar.css'

export default function Sidebar() {
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
                   <li className="sidebarListItem">Life</li>
                   <li className="sidebarListItem">Music</li>
                   <li className="sidebarListItem">Style</li>
                   <li className="sidebarListItem">Sport</li>
                   <li className="sidebarListItem">Tech</li>
                   <li className="sidebarListItem">Cinema</li>
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
