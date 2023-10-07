import {useState} from 'react'

export default function CounterLetDocumentPage() {
    const [ count, setCount ] = useState(0)
    //let은 리액트 전용 html에서 변경을 감지하지 못함 (따라서 , state 사용할것)

    function onClickCountUp() {
        setCount(count+1)
    }

    function onClickCountDown(){
        setCount(count-1)
    }


    return (
        <div>
        <div id ="qqq">{count}</div>
        <button onClick={onClickCountUp}>카운트 올려!!!</button>
        <button onClick={onClickCountDown}>카운트 내려!!!</button>
        </div>
    )
}