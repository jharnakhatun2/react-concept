import StyledButton from "./Button/Button";
import { ReUseableButton } from "./Button/ButtonReuse";
import { PassAttributesButton } from "./Button/PassAttributes";
import { FancyButton, PropsButton, SubmitButton } from "./Button/PropsButton";

export default function DisplayStyle() {
  return (
    <div className="py-10 gap-10 flex flex-wrap">
      <StyledButton>Styled Button </StyledButton>
      <ReUseableButton>Reuseable Button</ReUseableButton>
      {/* Button styled with props with condition outline */}
      <PropsButton variant="outline">Button Style with Props</PropsButton>
      <PropsButton>Button Style with Props</PropsButton>

      {/* as for ancor tag */}
      <FancyButton as="a">Extending Styling Button</FancyButton>
      {/* passed props and adding attributes */}
      <PropsButton type="submit">Submit</PropsButton>
      <SubmitButton>Submit</SubmitButton>
      <PassAttributesButton as="a">Pass Attributes</PassAttributesButton>
    </div>
  );
}
