import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

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
                <span onClick={ (e)=> {
                  e.stopPropagation();
                  let copy = [...따봉]
                  copy[index] = copy[index] + 1
                  따봉변경(copy)
                  } }>👍</span> {따봉[index]} 
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let newTitle = [...글제목]
                newTitle.splice(index, 1);  // array에서 삭제
                글제목변경(newTitle)
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{입력값변경(e.target.value)}}></input>
      <button onClick={()=>{
        let newTitle = [...글제목];
        newTitle.unshift(입력값);   // array에 값 추가
        글제목변경(newTitle);
      }}>글 추가</button>

      {
        modal == true ? <Modal 글수정={()=>{
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }} 글제목={글제목} title={title}/> : null
      }

      <h4>{ post }</h4>

      <Modal2/>
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

class Modal2 extends React.Component {
   constructor(){
    super()

    // class 컴포넌트에서 state 만드는 방법
    this.state = {
        name : 'kim',
        age : 20
    }
   }
   render(){
    return (
      <div>안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
   }
}

export default App;
