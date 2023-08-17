import useWindowResize from "./useWindowResize";

export default function LayoutOne() {
  const smallScreen = useWindowResize();
  return (
    <div>
      <h1>This is component for {smallScreen ? "small" : "large"} screen</h1>
    </div>
  );
}
