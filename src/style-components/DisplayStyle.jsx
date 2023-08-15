import StyledButton from "./Button/Button";
import { ReUseableButton } from "./Button/ButtonReuse";
import { FancyButton, PropsButton } from "./Button/PropsButton";

export default function DisplayStyle() {
  return (
    <div className="py-10 gap-10 flex">
      <StyledButton>Styled Button </StyledButton>
      <ReUseableButton>Reuseable Button</ReUseableButton>
      {/* Button styled with props with condition outline */}
      <PropsButton variant="outline">Button Style with Props</PropsButton>
      <PropsButton>Button Style with Props</PropsButton>
      {/* as for ancor tag */}
      <FancyButton as="a">Extending Styling Button</FancyButton>
    </div>
  );
}
