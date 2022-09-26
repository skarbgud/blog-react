/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);
  let [input, setInput] = useState('');

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

  function addTitle(inputTitle) {
    let titleCopy = [...title];
    titleCopy.push(inputTitle);
    setTitle(titleCopy);

    let likeCopy = [...like];
    likeCopy.push(0);
    setLike(likeCopy);
  }

  function removeTitle(idx) {
    let copy = [...title];
    copy.splice(idx, 1);
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        title.map(function(a, i) {
          return (<div className='list' key={i}>
            <h4 onClick={() => {setModal(!modal); setModalIndex(i)}}>{title[i]} <span onClick={() => {e.stopPropagation(); clickLike(i) }}>👍</span> {like[i]} </h4>
            <button onClick={(e) => { e.stopPropagation(); removeTitle(i);}}>삭제</button>
          </div>)
        })
      }

      <input onChange={(e) => {
        setInput(e.target.value)
      }}></input>

      <button onClick={() => { addTitle(input)}}>글등록</button>

      {
        modal == true ? <Modal color={'skyblue'} title={title} setTitle={setTitle} modalIndex={modalIndex}/> : null
      }
    </div>
  );
}

function Modal(props) {
  console.log(props);
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
