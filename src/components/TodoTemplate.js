import FormComponent from "./FormComponent";
import ListCompoent from "./ListComponents";

export default function TodoTemplate() {
  return (
    <div>
      <FormComponent/>
      <hr></hr>
      <ListCompoent/>
    </div>
  );
}