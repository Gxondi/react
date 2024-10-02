import { FC , useState} from "react";
import React from "react";
import QuestionCard from "./comporpties/QuestionCard";
import { produce } from "immer";
const List1: FC = () => {
  //调查文件
  const [questionList , setQuestionList] = useState([
    { id: "Q1", title: "问卷1", isPublished: true },
    { id: "Q2", title: "问卷2", isPublished: false },
    { id: "Q3", title: "问卷3", isPublished: true },
  ]);
  function add(){
    const r = Math.random().toString().slice(-3);
    const newQuestion = { id: 'Q' + r, title: `问卷${r}`, isPublished: false };
    setQuestionList(produce(draft => {
      draft.push(newQuestion);
    }));
  }
  function deleteQuestion(id:string){
    setQuestionList(
      produce((draft)=>{
        const index = draft.findIndex(question => question.id === id);
        if(index !== -1){
          draft.splice(index,1);
        }
      })
    );
  }
  function pushQuestion(id:string){
    setQuestionList(produce((draft)=>{
      const question = draft.find(question => question.id === id);
      if(question){
        question.isPublished = true;
      }
    }));
  }
  return (
    <div>
      <h1>问卷列表项目2</h1>
      <div>
        {questionList.map((question) => {
          //解构赋值
          const { id, title, isPublished } = question;
          return (
            <QuestionCard key={id} id={id} 
            title={title} isPublished={isPublished} 
            deleteQuestion={deleteQuestion}
            pushQuestion={pushQuestion}
            />
          );
        })}
      </div>
      <button onClick={add}>添加</button>
    </div>
  );
};

export default List1;