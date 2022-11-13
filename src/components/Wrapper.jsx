import React from "react";
import Game from "./game/Game";
import Computer from "./computer/Computer";
import Menu from "./other/Menu";
import Papers from "./other/Papers";
import Sponge from "./other/Sponge";
import { notesData, menuInfo } from "../data/data";

export default function Wrapper() {
  const [buttonAction, setButtonAction] = React.useState(false);
  const [missingButtons, setMissingButtons] = React.useState([]);

  const handlerClick = (id) => {
    if (buttonAction) {
      setMissingButtons([...missingButtons, id]);
    } else {
      /*  */
    }
  };

  const onClickMenuButton = (modificator) => {
    switch (modificator) {
      case 1:
        setButtonAction(!buttonAction);
        break;
      case 2:
        //...
        break;
      case 3:
        //...
        break;
      case 4:
        //...
        break;
      case 5:
      //...
    }
  };

  React.useEffect(() => {
    if (!buttonAction) {
      setMissingButtons([]);
    }
  }, [buttonAction]);

  return (
    <div className="wrapper">
      <div className="wrapper_game_computer">
        <Game />
        <Computer
          missingButtons={missingButtons}
          onClickButton={handlerClick}
        />
      </div>
      <div className="wrapper_menu">
        <Menu
          buttonAction={buttonAction}
          info={menuInfo}
          handleClick={onClickMenuButton}
        />
      </div>
      <Papers info={notesData} />
      <Sponge />
    </div>
  );
}
