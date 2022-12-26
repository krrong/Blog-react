import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목].sort();
        console.log(copy);
        글제목변경(copy);
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      {
        글제목.map(function(title, index){
          return(
            <div className='list'>
              <h4 onClick={() => { setModal(!modal); setTitle(index)} }>{ title } 
                <span onClick={ ()=> {
                  let copy = [...따봉]
                  copy[index] = copy[index] + 1
                  따봉변경(copy)
                  } }>👍</span> {따봉[index]} 
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal 글수정={()=>{
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }} 글제목={글제목} title={title}/> : null
      }

      <h4>{ post }</h4>
    </div>
  );
}

// 컴포넌트
function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
  )
}

export default App;
