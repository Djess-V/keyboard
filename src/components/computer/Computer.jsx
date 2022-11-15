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
  const [symbol, setSymbol] = React.useState("");
  const [onShift, setOnShift] = React.useState(false);
  const [onCapsLock, setOnCapsLock] = React.useState(false);
  const [onAlt, setOnAlt] = React.useState(false);
  const [onComputer, setOnComputer] = React.useState(true);
  const [onLock, setOnLock] = React.useState(false);
  const [onMusic, setOnMusic] = React.useState(false);
  const [onMouse, setOnMouse] = React.useState(false);
  const [mouseDirection, setMouseDirection] = React.useState("");

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
      }
    }
  };

  const changeCase = (id) => {
    if (id === 1) {
      setOnMouse(!onMouse);
    } else if (id === 2) {
      setOnMusic(!onMusic);
    } else if (id === 3) {
      window.location.reload();
    } else if (id === 4) {
      setOnLock(!onLock);
    } else if (id === 5) {
      setOnComputer(!onComputer);
      setOnShift(false);
      setOnCapsLock(false);
      setOnLock(false);
      setOnMusic(false);
      setOnMouse(false);
    } else if (id === 49) {
      setOnCapsLock(!onCapsLock);
    } else if (id === 62 || id === 75) {
      setOnShift(!onShift);
    } else if (id === 78) {
      window.open("https://www.microsoft.ru/", "_blank");
    } else if (id === 79 || id === 81) {
      setOnAlt(!onAlt);
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
      setMouseDirection("");
    }
  }, [onMouse]);

  return (
    <div className="computer">
      <Display
        mouseDirection={mouseDirection}
        onMouse={onMouse}
        mouseMove={mouseMove}
        onMusic={onMusic}
        onLock={onLock}
        onComputer={onComputer}
        symbol={symbol}
        indexDisplayImage={indexDisplayImage}
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
