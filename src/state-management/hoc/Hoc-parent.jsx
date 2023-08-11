import { useState } from "react";

function hoc(OriginalComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10);
    const increaseMoney = () => {
      setMoney(money * 2);
    };
    return <OriginalComponent money={money} increaseMoney={increaseMoney} />;
  }
  return NewComponent;
}
export default hoc;
