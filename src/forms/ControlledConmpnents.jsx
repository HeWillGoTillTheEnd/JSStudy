//값이 리액트의 통제를 받는 Input Form Element
//모든 데이터를 state에서 관리

import { useState } from "react";

function NameForm(props){
    const [value, setValue] = useState('');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}