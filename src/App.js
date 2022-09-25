/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function modalSwitch() {
    if (modal === true) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  function clickLike(i) {
    console.log(`i: ${i}`);
    let copy = [...like];
    copy[i] = copy[i] + 1;
    setLike(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        title.map(function(a, i) {
          return (<div className='list' key={i}>
            <h4>{title[i]} <span onClick={() => {clickLike(i) }}>👍</span> {like[i]} </h4>
          </div>)
        })
      }

      {
        modal == true ? <Modal/> : null
      }
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
