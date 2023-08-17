import useWindowResize from "./useWindowResizeTwo";

export default function LayoutTwo() {
  const smallScreen = useWindowResize(350);
  return (
    <div>
      <h1 className={smallScreen ? "small" : "large"}>
        This is component which get conditional class when screen will be
        resize.
      </h1>
    </div>
  );
}
