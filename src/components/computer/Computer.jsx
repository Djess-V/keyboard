import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { symbolId, serviceButtonsId } from "../../data/data";

export default function Computer({
  indexDisplayImage,
  missingButtons,
  buttonAction,
  startMissingButtons = (f) => f,
}) {
  const [symbol, setSymbol] = React.useState("");
  const [onShift, setOnShift] = React.useState(false);
  const [onCapsLock, setOnCapsLock] = React.useState(false);
  const [onAlt, setOnAlt] = React.useState(false);

  const onClickButton = (id) => {
    if (buttonAction) {
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
    if (id === 49) {
      setOnCapsLock(!onCapsLock);
    } else if (id === 62 || id === 75) {
      setOnShift(!onShift);
    } else if (id === 79 || id === 81) {
      setOnAlt(!onAlt);
    }
  };

  React.useEffect(() => {
    if (buttonAction) {
      setOnCapsLock(false);
      setOnShift(false);
    }
  }, [buttonAction]);

  return (
    <div className="computer">
      <Display symbol={symbol} indexDisplayImage={indexDisplayImage} />
      <Keyboard
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
        return item.data[3];
      } else if (!onShift && onCapsLock && onAlt) {
        return item.data[1];
      } else if (onShift && onCapsLock && !onAlt) {
        return item.data[2];
      } else if (onShift && onCapsLock && onAlt) {
        return item.data[0];
      }
    }
  }
}
