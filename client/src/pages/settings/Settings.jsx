import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">

                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>

                    <span className="settingsDeleteTitle">
                        Delete Account
                    </span>

                    <form className="settingsForm" action="">
                        <label>
                            Profile Picture
                        </label>
                        <div className="settingsPP">
                            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                            alt="" />
                        
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                            <input type="file" id="fileInput" style={{display : "none"}}/>

                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="이름"/>
                        <label>Email</label>
                        <input type="email" placeholder="이메일@email.com"/>
                        <label>Password</label>
                        <input type="password" placeholder="비밀번호"/>
                        <button className="settingsSubmitButton">변경하기</button>
                    </form>
                </div>
            </div>
                <Sidebar/>
        </div>
    )
}
