import { updateTodo, deleteTodo  } from './../store/todoListSlice';
import { useDispatch} from 'react-redux'
export default function ItemComponent(props) {
  const { todo } = props;
  const dispatch = useDispatch()
  console.log(todo);
  return (
    <tr>
      <td>{todo.id}</td>
      <td className={todo.done ? 'done' : ''}>{todo.val}</td>
      <td>
        <button className="btn finish" onClick={() => dispatch(updateTodo(todo.id))}>작업 완료</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn delete">삭제</button>
      </td>
        
    </tr>
  );
}