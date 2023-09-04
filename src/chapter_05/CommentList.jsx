import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
     comment: "안녕하세요, 성수입니다.",
    },
    {
        name: "김성수",
     comment: "안녕하세요, 성수입니다.",
    },
    {
        name: "익명",
     comment: "쿠쿠루삥뽕",
    },
];
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name= {comment.name} comment = {comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;