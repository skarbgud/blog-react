/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] } <span onClick={() => {setLike(like+1)}}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>
      
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
