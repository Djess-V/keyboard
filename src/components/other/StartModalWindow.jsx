import React from "react";

let StartModalWindow = ({ closeModalWindow }) => {
  return (
    <>
      <div class="podlogka"></div>
      <div class="startModalWindow">
        <span onClick={closeModalWindow}>X</span>
        <h1>Прочитайте памятку под клавиатурой!</h1>
      </div>
    </>
  );
};

StartModalWindow = React.memo(StartModalWindow);

export default StartModalWindow;
