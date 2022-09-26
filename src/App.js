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
            <h4 onClick={() => {setModal(!modal)}}>{title[i]} <span onClick={() => {clickLike(i) }}>👍</span> {like[i]} </h4>
          </div>)
        })
      }

      {
        modal == true ? <Modal color={'skyblue'} title={title} setTitle={setTitle}/> : null
      }
    </div>
  );
}

function Modal(props) {
  console.log(props);
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>

      <button onClick={() => {props.setTitle(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])}}>글수정</button>
    </div>
  )
}

export default App;
