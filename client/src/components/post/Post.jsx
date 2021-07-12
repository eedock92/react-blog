import "./post.css"
import sampleImg   from "../../assets/img/asdasd.jpg"
import {Link} from "react-router-dom"

export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && (
                   <img
                   className="postImg" 
                   src={sampleImg}
                   alt="" 
                   />    
            )}
         
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map( c => (
                        <span className="postCat" key = {c.name}>{c.name}</span>
                    ))}
                </div>

                <Link to={`/post/${post._id}`} className="link">       
                    <span className="postTitle">
                            {post.title}
                    </span>
                </Link>

                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
            {post.desc}
            </p>
        </div>
    )
}
