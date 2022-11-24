import React from "react";

const numbers = {
  8: 7,
  9: 8,
  10: 9,
  12: 4,
  13: 5,
  14: 6,
  16: 1,
  17: 2,
  18: 3,
  21: 0,
};

const symbolsCalculator = [
  "M+",
  "MR",
  "MC",
  "M",
  "→",
  "CE",
  "C",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "±",
  "0",
  ".",
  "=",
];

export default function Calculator() {
  const [valueInput, setValueInput] = React.useState("");
  const [onMemory, setOnMemory] = React.useState(false);
  const [memory, setMemory] = React.useState(null);
  const [tablo, setTablo] = React.useState("");
  const [minus, setMinus] = React.useState(true);
  const [equallyPressed, setEquallyPressed] = React.useState(false);

  const refTablo = React.useRef();

  const buttons = symbolsCalculator.map((item, i) => (
    <button
      key={i}
      className={`calculator_button ${
        memoryButtonActivity(i) ? "disabled_button" : ""
      }`}
      disabled={memoryButtonActivity(i)}
      onClick={() => onClickButton(i)}
    >
      {item}
    </button>
  ));

  function memoryButtonActivity(index) {
    if (index >= 1 && index <= 3) {
      return !onMemory;
    }

    return false;
  }

  function installTablo(char) {
    if ((valueInput || valueInput === 0) && valueInput.length > 0)
      if (tablo) {
        setTablo(tablo.slice(0, tablo.length - 1) + char);
      } else {
        setTablo(valueInput + char);
        setValueInput("");
        setMinus(true);
      }
  }

  function formatResult(number) {
    const string = String(number);
    console.log(string);
    if (string.includes(".")) {
      const index = string.indexOf(".");
      return index;
    }
    return string;
  }

  function calculateValue(string) {
    const chars = ["/", "*", "+", "-"];
    let result;

    chars.forEach((item, i) => {
      if (item !== "-") {
        if (string.includes(item)) {
          const numbers = string.split(item);

          if (i === 0) {
            if (+numbers[1] === 0) {
              setTablo("На ноль делить нельзя!!!");
              result = "";
            } else {
              result = +numbers[0] / +numbers[1];
            }
          } else if (i === 1) {
            result = +numbers[0] * +numbers[1];
          } else if (i === 2) {
            result = +numbers[0] + +numbers[1];
          }
        }
      } else {
        if (string.includes(item)) {
          const numbers = string.split(item);

          if (numbers.length === 2) {
            result = +numbers[0] - +numbers[1];
          } else if (numbers.length === 3) {
            if (numbers[0] === "") {
              result = -+numbers[1] - +numbers[2];
            } else if (numbers[1] === "") {
              result = +numbers[0] - -+numbers[2];
            }
          } else if (numbers.length === 4) {
            result = -+numbers[1] - -+numbers[3];
          }
        }
      }
    });

    return formatResult(result);
  }

  function onClickButton(index) {
    if (index === 0) {
      setOnMemory(true);
      setMemory(valueInput);
    } else if (index === 1) {
      setValueInput(memory);
    } else if (index === 2) {
      setOnMemory(false);
      setMemory(null);
    } else if (index === 3) {
      setValueInput(memory);
    } else if (index === 4) {
      setValueInput(valueInput.slice(0, valueInput.length - 1));
    } else if (index === 5) {
      if (tablo && tablo[tablo.length - 1] === "=") {
        setTablo("");
      }
      setValueInput("");
      setEquallyPressed(false);
      setMinus(true);
    } else if (index === 6) {
      setValueInput("");
      setEquallyPressed(false);
      setTablo("");
      setMinus(true);
    } else if (index === 7) {
      installTablo("/");
    } else if (index === 11) {
      installTablo("*");
    } else if (index === 15) {
      installTablo("-");
    } else if (index === 19) {
      installTablo("+");
    } else if (index === 22) {
      if (!valueInput.includes(".")) {
        setValueInput(valueInput + ".");
      }
    } else if (index === 23) {
      if (!equallyPressed) {
        setTablo(tablo + valueInput + "=");
        setEquallyPressed(true);
      }
    }

    if (valueInput === "" || valueInput.length < 11) {
      for (let key in numbers) {
        if (index === +key) {
          if (+key === 21) {
            if (
              valueInput === "" ||
              +valueInput !== 0 ||
              valueInput.includes(".")
            ) {
              setValueInput(valueInput + numbers[key]);
            }
          } else {
            if (
              +valueInput !== 0 ||
              valueInput.includes(".") ||
              valueInput === ""
            ) {
              setValueInput(valueInput + numbers[key]);
            }
          }
        }
      }
    }

    if (valueInput.length <= 12) {
      if (index === 20) {
        if (minus) {
          if (+valueInput !== 0) {
            setValueInput("-" + valueInput);
            setMinus(!minus);
          }
        } else {
          const firstCharacter = valueInput.slice(0, 1);
          if (firstCharacter === "-") {
            setValueInput(valueInput.slice(1));
            setMinus(!minus);
          }
        }
      }
    }
  }

  React.useEffect(() => {
    if (tablo && tablo[tablo.length - 1] === "=") {
      setValueInput(calculateValue(tablo.slice(0, tablo.length - 1)));
    }
  }, [tablo]);

  React.useEffect(() => {
    if (
      tablo === "На ноль делить нельзя!!!" &&
      valueInput &&
      valueInput.length > 0
    ) {
      setTablo("");
      setEquallyPressed(false);
      setMinus(true);
    }
  }, [valueInput]);

  return (
    <div className="display_calculator">
      <p className="calculator_tablo" ref={refTablo}>
        {tablo}
      </p>
      <p id="field">{valueInput}</p>
      <div className="calculator_buttons">{buttons}</div>
    </div>
  );
}
