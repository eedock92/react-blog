import './login.css'
import { Link }  from 'react-router-dom'

export default function Login() {
  return (

    <div className="login">

      <span className = "loginTitle">로그인</span>

      <form className="loginForm">
        <label>이메일</label>
        <input type="text" className="loginInput" placeholder="이메일을 입력하세요..."></input>
        <label>비밀번호</label>
        <input type="password" className="loginInput" placeholder="비밀번호를 입력하세요..."></input>
        <button className = "loginButton">로그인</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register"> 회원가입</Link>
       
        </button>
    </div>

  )
}
