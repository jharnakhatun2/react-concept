import Button from "../../components/button/Button";

export default function DynamicButton() {
  return (
    <section className="flex gap-5">
      <Button text="v" />
      <Button text="c" />
      <Button text="s" />
    </section>
  );
}
