import React from "react";

import Wrapper from "./Wrapper";

let App = () => {
  return <Wrapper />;
};

/* ---------------------------------------------------------------------------------- */

App = React.memo(App);

export default App;
