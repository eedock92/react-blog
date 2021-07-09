import "./post.css"
import sampleImg   from "../../assets/img/asdasd.jpg"

export default function Post() {
    return (
        <div className="post">
            <img
            className="postImg" 
            src={sampleImg}
            alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                        Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
    )
}
