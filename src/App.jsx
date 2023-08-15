import ChildrenApply from "./components/props/render-props/ChildrenApply";
import Main from "./components/props/render-props/Main";
import HocChild from "./state-management/hoc/Hoc-child";
import Parent from "./state-management/lifting-state-up/Parent";
import ClickCounter from "./state-management/render-props/children/ClickCounter";
import ClickCounters from "./state-management/render-props/render/ClickCounters";
import Counter from "./state-management/render-props/render/Counter";
import HoverCounters from "./state-management/render-props/render/HoverCounters";
import ChildOne from "./state-management/contextApi/ChildOne";
import ArrayDistructuring from "./hooks/useState/ArrayDistructuring";
import Display from "./hooks/useState/Display";
import WithoutDependency from "./hooks/useEffect/WithoutDependency";
import BlankDependency from "./hooks/useEffect/BlankDependency";
import WithDependency from "./hooks/useEffect/WithDependency";
import { useState } from "react";
import DisplayStyle from "./style-components/DisplayStyle";
import Displaycall from "./hooks/useCallback-useMemo/Displaycall";

function App() {
  const [show, setShow] = useState(true);
  return (
    <section className="px-20 py-10">
      {show && <WithoutDependency />}
      <button type="button" onClick={() => setShow((preShow) => !preShow)}>
        {show ? "Hide Button" : "Show Button"}
      </button>
      <BlankDependency />
      <WithDependency />
      <Main />
      <ChildrenApply />
      <Parent />
      <HocChild />
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <ClickCounter />
        <Counter
          render={(money, increment) => (
            <ClickCounters counter={money} increment={increment} />
          )}
        />
        <Counter
          render={(money, increment) => (
            <HoverCounters counter={money} increment={increment} />
          )}
        />
      </div>
      <ChildOne />
      <ArrayDistructuring />
      <Display />
      {/* style Components */}
      <DisplayStyle />
      {/* useCallback and use Memo */}
      <Displaycall />
    </section>
  );
}

export default App;
