import HoverCounter from "../../components/hoc/HoverCounter";
import OriginalComponent from "../../components/hoc/OriginalComponent";

export default function Hoc() {
  return (
    <div>
      <OriginalComponent />
      <HoverCounter />
    </div>
  );
}
