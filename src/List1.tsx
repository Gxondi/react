import { FC } from "react";
import React from "react";
import QuestionCard from "./comporpties/QuestionCard";

const List1: FC = () => {
  //调查文件
  const questionList = [
    { id: "1", title: "问卷1", isPublished: true },
    { id: "2", title: "问卷2", isPublished: false },
    { id: "3", title: "问卷3", isPublished: true },
  ];
  return (
    <div>
      <h1>问卷列表项目</h1>
      <div>
        {questionList.map((question) => {
          //解构赋值
          const { id, title, isPublished } = question;
          return (
            <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />
            // <QuestionCard key={id} {...question} />
            // <div key={id} className="list-item">
            //   <strong>{title}</strong>
            //   &nbsp;
            //     {isPublished ? (<span style={{ color: "red" }}>已发布</span>) : ( "未发布")}   
            //   &nbsp;
            //   <button onClick={()=>{edit(id)}}>编辑</button>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default List1;