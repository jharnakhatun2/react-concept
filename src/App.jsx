import ChildrenApply from "./components/props/render-props/ChildrenApply";
import Main from "./components/props/render-props/Main";
import HocChild from "./state-management/hoc/Hoc-child";
import Parent from "./state-management/lifting-state-up/Parent";
import ClickCounter from "./state-management/render-props/children/ClickCounter";
import ClickCounters from "./state-management/render-props/render/ClickCounters";
import Counter from "./state-management/render-props/render/Counter";
import HoverCounters from "./state-management/render-props/render/HoverCounters";

function App() {
  return (
    <section className="px-20 py-10">
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
    </section>
  );
}

export default App;
