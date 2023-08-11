import ChildrenApply from "./components/props/render-props/ChildrenApply";
import Main from "./components/props/render-props/Main";
import HocChild from "./state-management/hoc/Hoc-child";
import Parent from "./state-management/lifting-state-up/Parent";
import ClickCounter from "./state-management/render-props/children/ClickCounter";

function App() {
  return (
    <section className="px-20 py-10">
      <Main />
      <ChildrenApply />
      <Parent />
      <HocChild />
      <ClickCounter />
    </section>
  );
}

export default App;
