import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTodo} from '../store/todoListSlice';
import './../css/form.css';

export default () => {
  const todoList = useSelector(state => state.todoList)
  const dispatch = useDispatch()

  const txt = useRef();

  const sendData = (evt) => {
    evt.preventDefault();
    
    dispatch(addTodo(txt.current.value));

    txt.current.focus();
    txt.current.value = ''
    console.log(todoList);
  }
  return(
    <>
    <div className="form-container">
      <input type="text" ref={txt} className="input"/>
      <button onClick={sendData} className="btn add">추가</button>
    </div>      
    </>
  ); 
}