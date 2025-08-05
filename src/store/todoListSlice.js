import { createSlice } from "@reduxjs/toolkit";
//초기 랜덤 데이터
function makeItem(){
  const items = [
    {
        "id": 1,
        "val": "빨래하기",
        "done": false
    },
    {
        "id": 2,
        "val": "장보기",
        "done": false
    },
    {
        "id": 3,
        "val": "청소하기",
        "done": false
    },
    {
        "id": 4,
        "val": "요리하기",
        "done": false
    },
    {
        "id": 5,
        "val": "운동하기",
        "done": false
    },
    {
        "id": 6,
        "val": "책 읽기",
        "done": false
    },
    {
        "id": 7,
        "val": "이메일 확인",
        "done": false
    },
    {
        "id": 8,
        "val": "프로젝트 작업",
        "done": false
    },
    {
        "id": 9,
        "val": "미팅 준비",
        "done": false
    },
    {
        "id": 10,
        "val": "전화하기",
        "done": false
    }
];
  return items;
}
let cnt = 10;
export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    value: makeItem()
  },
  reducers: {
    updateTodo: (state, action) =>  {
        const newData = state.value.map((todo) => {
          // todo => {id: 1, text: '1번째 할일', done: false},
          if (todo.id === action.payload) return { ...todo, done: !todo.done };
          else return todo;
        });
        state.value = newData; 
    },
    deleteTodo: (state, action) => {
      const newData = state.value.filter((todo) => {
        if (todo.id === action.payload) return false;
        else return true;
      });

      state.value = newData;
    },
    addTodo: (state, action) => {
      const todo = { id: ++cnt, val : action.payload, done: false };
      state.value = state.value.concat(todo)
    }
  }
})

// 각 케이스에 대한 리듀서 함수들을 생성
export const { updateTodo, deleteTodo, addTodo } = todoListSlice.actions

export default todoListSlice.reducer