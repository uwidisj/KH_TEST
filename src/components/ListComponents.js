import ItemComponent from "./ItemComponent";
import { useSelector } from "react-redux";
export default function ListCompoent() {
  const todoList = useSelector(state => state.todoList.value)

  return (
    <div>
      <table className="area">
        <tr>
          <th>순번</th>
          <th className="content">내용</th>
          <th>작업</th>
        </tr>
        <tbody>
        {todoList.map((todo, idx) => {
            return (
              <ItemComponent
                key={todo.id}
                todo={todo}></ItemComponent>
            )
          })}          
        </tbody>
      </table>
    </div>
  );
}