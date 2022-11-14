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
  const [isChangeBackground, setIsChangeBackground] = React.useState(false);
  const [indexDisplayImage, setIndexDisplayImage] = React.useState(0);

  const startMissingButtons = (id) => {
    setMissingButtons([...missingButtons, id]);
  };

  const handlerClickModalDisplayBg = (index) => {
    setIsChangeBackground(false);
    setIndexDisplayImage(index);
  };

  const onClickMenuButton = (item) => {
    switch (item) {
      case 0:
        setButtonAction(!buttonAction);
        break;
      case 1:
        //...
        break;
      case 2:
        setIsChangeBackground(true);
        break;
      case 3:
        //...
        break;
      case 4:
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
          indexDisplayImage={indexDisplayImage}
          missingButtons={missingButtons}
          startMissingButtons={startMissingButtons}
          buttonAction={buttonAction}
        />
      </div>
      <div className="wrapper_menu">
        <Menu
          buttonAction={buttonAction}
          isChangeBackground={isChangeBackground}
          closeModalDisplayBg={() => setIsChangeBackground(false)}
          info={menuInfo}
          handleClick={onClickMenuButton}
          handlerClickModalDisplayBg={handlerClickModalDisplayBg}
        />
      </div>
      <Papers info={notesData} />
      <Sponge />
    </div>
  );
}
