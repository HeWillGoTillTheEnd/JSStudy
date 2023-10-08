import { useState } from "react"; 

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("");
    function onChangeEmail(event) {
        
        setEmail(event.target.value)
    }
    
    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup(event) {
        console.log(email) // 진짜 포장이 잘 됐는지 확인해보기
        console.log(password) //진짜 포장이 잘 됐는지 확인해보기

        // 1. 검증하기
        if(!email.includes("@")){
            // alert("이메일 똑바로 안쓸래?? @가 없자나!!")
            // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다."
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
        } else {
        // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉, API)

        // 3. 성공알람 보여주기
        alert("회원가입을 축하합니다~~~")   
        }
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/>
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원 가입</button>
        </div>
    )
}