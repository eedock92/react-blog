import './register.css'
import {Link} from 'react-router-dom'
export default function Register() {
    return (
        <div className="register">
             <span className = "registerTitle">회원가입</span>

            <form className="registerForm">
                <label>이름</label>
                <input type="text" className="registerInput" placeholder="이름을 입력하세요..."></input>
                <label>이메일</label>
                <input type="text" className="registerInput" placeholder="이메일을 입력하세요..."></input>
                <label>비밀번호</label>
                <input type="password" className="registerInput" placeholder="비밀번호를 입력하세요..."></input>
                <button className = "registerButton">회원가입</button>
            </form>
             <button className="registerLoginButton">
                 <Link className="link" to="/login">로그인</Link>
                 </button> 
        </div>
    )
}
