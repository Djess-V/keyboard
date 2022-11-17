import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { symbolId, serviceButtonsId } from "../../data/data";

export default function Computer({
  indexDisplayImage,
  missingButtons,
  buttonHidden,
  startMissingButtons = (f) => f,
}) {
  const [onComputer, setOnComputer] = React.useState(true);
  const [onShift, setOnShift] = React.useState(false);
  const [onCapsLock, setOnCapsLock] = React.useState(false);
  const [onAlt, setOnAlt] = React.useState(false);
  const [onLock, setOnLock] = React.useState(false);
  const [onHome, setOnHome] = React.useState(true);
  const [onMusic, setOnMusic] = React.useState(false);
  const [onMouse, setOnMouse] = React.useState(false);
  const [mouseDirection, setMouseDirection] = React.useState("");
  const [timerCanselMouse, setTimerCanselMouse] = React.useState(0);
  const [symbol, setSymbol] = React.useState("");
  const [pressedButton, setPressedButton] = React.useState(0);
  const [pressedButtonLeft, setPressedButtonLeft] = React.useState(0);
  const [pressedButtonRight, setPressedButtonRight] = React.useState(0);
  const [pressedButtonDelete, setPressedButtonDelete] = React.useState(0);
  const [pressedButtonBackspace, setPressedButtonBackspace] = React.useState(0);

  const onClickButton = (id) => {
    if (buttonHidden) {
      startMissingButtons(id);
    } else {
      let flagServiceButtons = false;
      for (let item of serviceButtonsId) {
        if (item === id) {
          flagServiceButtons = true;
          changeCase(id);
        }
      }
      if (!flagServiceButtons) {
        setSymbol(printText(id, onShift, onCapsLock, onAlt));
        setPressedButton(pressedButton + 1);
      }
    }
  };

  const changeCase = (id) => {
    if (id === 1) {
      setOnMouse(!onMouse);
    } else if (id === 2) {
      setOnMusic(!onMusic);
    } else if (id === 3) {
      if (onHome) {
        window.location.reload();
      }
    } else if (id === 4) {
      setOnLock(!onLock);
    } else if (id === 5) {
      setOnComputer(!onComputer);
      setOnShift(false);
      setOnCapsLock(false);
      setOnLock(false);
      setOnHome(!onHome);
      setOnMusic(false);
      setOnMouse(false);
      setSymbol("");
      setPressedButton(0);
      setPressedButtonLeft(0);
      setPressedButtonRight(0);
      setPressedButtonDelete(0);
      setPressedButtonBackspace(0);
    } else if (id === 21) {
      setPressedButtonDelete(pressedButtonDelete + 1);
    } else if (id === 35) {
      setPressedButtonBackspace(pressedButtonBackspace + 1);
    } else if (id === 49) {
      setOnCapsLock(!onCapsLock);
    } else if (id === 62 || id === 75) {
      setOnShift(!onShift);
    } else if (id === 78) {
      window.open("https://www.microsoft.ru/", "_blank");
    } else if (id === 79 || id === 81) {
      setOnAlt(!onAlt);
    } else if (id === 83) {
      setPressedButtonLeft(pressedButtonLeft + 1);
    } else if (id === 85) {
      setPressedButtonRight(pressedButtonRight + 1);
    }
  };

  const mouseMove = (direction) => {
    setMouseDirection(direction);
    if (!direction) {
      setOnMouse(false);
    }
  };

  React.useEffect(() => {
    if (buttonHidden) {
      setOnCapsLock(false);
      setOnShift(false);
    }
  }, [buttonHidden]);

  React.useEffect(() => {
    if (!onMouse) {
      clearTimeout(timerCanselMouse);
      setMouseDirection("");
    }
  }, [onMouse]);

  return (
    <div className="computer">
      <Display
        mouseDirection={mouseDirection}
        onMouse={onMouse}
        mouseMove={mouseMove}
        canselMouseMove={(timer) => setTimerCanselMouse(timer)}
        onMusic={onMusic}
        onLock={onLock}
        onComputer={onComputer}
        symbol={symbol}
        pressedButton={pressedButton}
        indexDisplayImage={indexDisplayImage}
        pressedButtonLeft={pressedButtonLeft}
        pressedButtonRight={pressedButtonRight}
        pressedButtonDelete={pressedButtonDelete}
        pressedButtonBackspace={pressedButtonBackspace}
      />
      <Keyboard
        onMouse={onMouse}
        onMusic={onMusic}
        onLock={onLock}
        onComputer={onComputer}
        onCapsLock={onCapsLock}
        onAlt={onAlt}
        onShift={onShift}
        missingButtons={missingButtons}
        onClickButton={onClickButton}
      />
    </div>
  );
}

/* --------------------------------------------------------------*/

function printText(id, onShift, onCapsLock, onAlt) {
  for (let item of symbolId) {
    if (item.id === id) {
      if (!onShift && !onCapsLock && !onAlt) {
        return item.data[2];
      } else if (!onShift && !onCapsLock && onAlt) {
        return item.data[0];
      } else if (onShift && !onCapsLock && !onAlt) {
        return item.data[3];
      } else if (onShift && !onCapsLock && onAlt) {
        return item.data[1];
      } else if (!onShift && onCapsLock && !onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[2];
        } else {
          return item.data[3];
        }
      } else if (!onShift && onCapsLock && onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[0];
        } else {
          return item.data[1];
        }
      } else if (onShift && onCapsLock && !onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[3];
        } else {
          return item.data[2];
        }
      } else if (onShift && onCapsLock && onAlt) {
        if (id >= 22 && id <= 34) {
          return item.data[1];
        } else {
          return item.data[0];
        }
      }
    }
  }
  return "";
}
