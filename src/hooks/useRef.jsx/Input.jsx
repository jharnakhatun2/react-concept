import React from "react";

function OnlyInput({ type, placeholder }, ref) {
  return (
    <div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="border outline-none px-2"
      />
    </div>
  );
}
const forwardedRef = React.forwardRef(OnlyInput);
export default forwardedRef;
