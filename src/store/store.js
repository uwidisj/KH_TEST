import {configureStore} from '@reduxjs/toolkit';
import  todoListSlice  from './todoListSlice';

//빈 저장소 생성
export default configureStore({
  reducer : {
    todoList : todoListSlice
  }
});
