import React, { useState } from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfrimed] = useState(false);
    
    const handleConfirm = () => {
        setIsConfrimed((prevIsConfrimed) => !prevIsConfrimed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;