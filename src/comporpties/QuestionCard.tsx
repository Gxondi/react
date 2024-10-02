import { FC } from "react";
import "./QuestionCard.css";
import React from "react";
type PropsType = {
    id: string;
    title: string;
    isPublished: boolean;
    deleteQuestion?: (id: string) => void;
    pushQuestion?: (id: string) => void;
}
const QuestionCard: FC<PropsType> = (props) => {
    const { id, title, isPublished, deleteQuestion ,pushQuestion} = props;

    function del(id: string) {
        if (deleteQuestion) {
            deleteQuestion(id);
        }
    }
    function push(id: string) {
        if (pushQuestion) {
            pushQuestion(id);
        }
    }
    return (
        <>
            <div key={id} className="list-item">
                <strong>{title}</strong>
                &nbsp;
                {isPublished ? (<span style={{ color: "red" }}>已发布</span>) : ("未发布")}
                &nbsp;
                <button onClick={() => { push(id) }}>发布</button>
                &nbsp;
                <button onClick={() => { del(id) }}>删除</button>
            </div>
        </>
    )
}


export default QuestionCard;