import React from "react";

let StartModalWindow = ({ closeModalWindow }) => {
  return (
    <div class="dm-overlay">
      <div class="dm-table">
        <div class="dm-cell">
          <div class="dm-modal">
            <span class="close" onClick={closeModalWindow}></span>
            <p>Прочитайте памятку под клавиатурой!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

StartModalWindow = React.memo(StartModalWindow);

export default StartModalWindow;
