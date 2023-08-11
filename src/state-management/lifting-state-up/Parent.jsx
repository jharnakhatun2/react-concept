import Child from "./Child";
import Form from "./Form";

export default function Parent() {
  const name = "Jharna";
  const getData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child name={name} />
      <Form getData={getData} />
    </div>
  );
}
