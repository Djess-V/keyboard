import React from "react";

let AdaptiveDesign = () => {
  return (
    <div className="adaptive-design">
      <h1>Привет!</h1>
    </div>
  );
};

AdaptiveDesign = React.memo(AdaptiveDesign);

export default AdaptiveDesign;
