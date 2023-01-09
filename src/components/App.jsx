import React from "react";
import StartModalWindow from "./other/StartModalWindow";

import Wrapper from "./Wrapper";

let App = () => {
  const [start, setStart] = React.useState(true);

  const closeModalWindow = () => {
    setStart(false);
  };

  return (
    <>
      <Wrapper />
      {start && <StartModalWindow closeModalWindow={closeModalWindow} />}
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

App = React.memo(App);

export default App;
