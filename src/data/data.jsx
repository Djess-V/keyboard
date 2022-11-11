import React from "react";
import {
  TfiMouseAlt,
  TfiMusicAlt,
  TfiHome,
  TfiLock,
  TfiPowerOff,
  TfiReddit,
  TfiTwitter,
  TfiStar,
  TfiTarget,
  TfiSkype,
  TfiSettings,
  TfiPalette,
  TfiPackage,
  TfiPaintRoller,
  TfiMagnet,
  TfiLocationArrow,
  TfiMicrophone,
  TfiMicrosoftAlt,
  TfiAlignJustify,
  TfiArrowCircleLeft,
  TfiArrowCircleDown,
  TfiArrowCircleRight,
  TfiArrowCircleUp,
  TfiDirectionAlt,
} from "react-icons/tfi";

export const styleSVG = {
  width: "16px",
  height: "16px",
};

export const styleSVGArrow = {
  width: "12px",
  height: "12px",
};

export const btnUpP = [
  { data: [<TfiMouseAlt style={styleSVG} />], name: "mouseBtn", id: 1 },
  { data: [<TfiMusicAlt style={styleSVG} />], name: "soundBtn", id: 2 },
  { data: [<TfiHome style={styleSVG} />], name: "homeBtn", id: 3 },
  { data: [<TfiLock style={styleSVG} />, "PC"], name: "blockBtn", id: 4 },
  { data: [<TfiPowerOff style={styleSVG} />, "PC"], name: "offBtn", id: 5 },
];

export const btn1F = [
  { data: ["Esc", ""], id: 6 },
  { data: [<TfiReddit style={styleSVG} />, "F1"], id: 7 },
  { data: [<TfiTwitter style={styleSVG} />, "F2"], id: 8 },
  { data: [<TfiStar style={styleSVG} />, "F3"], id: 9 },
  { data: [<TfiTarget style={styleSVG} />, "F4"], id: 10 },
  { data: [<TfiSkype style={styleSVG} />, "F5"], id: 11 },
  { data: [<TfiSettings style={styleSVG} />, "F6"], id: 12 },
  { data: [<TfiSettings style={styleSVG} />, "F6"], id: 13 },
  { data: [<TfiPalette style={styleSVG} />, "F7"], id: 14 },
  { data: [<TfiPackage style={styleSVG} />, "F8"], id: 15 },
  { data: [<TfiPaintRoller style={styleSVG} />, "F9"], id: 16 },
  { data: [<TfiMagnet style={styleSVG} />, "F10"], id: 17 },
  { data: [<TfiLocationArrow style={styleSVG} />, "F11"], id: 18 },
  { data: [<TfiMicrophone style={styleSVG} />, "F12"], id: 19 },
  { data: ["Insert", "Scr Lk"], id: 20 },
  { data: ["Delete", "Print Scr"], id: 21 },
];

export const btn2Number = [
  { data: ["~", "`", "Ё"], id: 22 },
  { data: ["!", "1"], id: 23 },
  { data: ["@", "2", '"'], id: 24 },
  { data: ["#", "3", "№"], id: 25 },
  { data: ["$", "4", ";"], id: 26 },
  { data: ["%", "5"], id: 27 },
  { data: ["^", "6", ":"], id: 28 },
  { data: ["&", "7", "?"], id: 29 },
  { data: ["*", "8"], id: 30 },
  { data: ["(", "9"], id: 31 },
  { data: [")", "0"], id: 32 },
  { data: ["_", "-"], id: 33 },
  { data: ["+", "="], id: 34 },
  { data: ["Backspace"], id: 35 },
];

export const btn3Tab = [
  { data: ["Tab", <TfiDirectionAlt style={styleSVGArrow} />], id: 36 },
  { data: ["Q", "", "Й"], id: 37 },
  { data: ["W", "", "Ц"], id: 38 },
  { data: ["E", "", "У"], id: 39 },
  { data: ["R", "", "К"], id: 40 },
  { data: ["T", "", "Е"], id: 41 },
  { data: ["Y", "", "Н"], id: 42 },
  { data: ["U", "", "Г"], id: 43 },
  { data: ["I", "", "Ш"], id: 44 },
  { data: ["O", "", "Щ"], id: 45 },
  { data: ["P", "", "З"], id: 46 },
  { data: ["{", "[", "Х"], id: 47 },
  { data: ["}", "]", "Ъ"], id: 48 },
];

export const btn3CapsLock = [
  { data: ["Caps", "Lock", "A"], id: 49 },
  { data: ["A", "", "Ф"], id: 50 },
  { data: ["S", "", "Ы"], id: 51 },
  { data: ["D", "", "В"], id: 52 },
  { data: ["F", "", "А"], id: 53 },
  { data: ["G", "", "П"], id: 54 },
  { data: ["H", "", "Р"], id: 55 },
  { data: ["J", "", "О"], id: 56 },
  { data: ["K", "", "Л"], id: 57 },
  { data: ["L", "", "Д"], id: 58 },
  { data: [":", ";", "Ж"], id: 59 },
  { data: ['"', "'", "Э"], id: 60 },
  { data: ["|", "\\", "/"], id: 61 },
];

export const btn4Shift = [
  { data: ["Shift"], id: 62 },
  { data: ["|", "\\", "/"], id: 63 },
  { data: ["Z", "", "Я"], id: 64 },
  { data: ["X", "", "Ч"], id: 65 },
  { data: ["C", "", "С"], id: 66 },
  { data: ["V", "", "М"], id: 67 },
  { data: ["B", "", "И"], id: 68 },
  { data: ["N", "", "Т"], id: 69 },
  { data: ["M", "", "Ь"], id: 70 },
  { data: ["<", ",", "Б"], id: 71 },
  { data: [">", ".", "Ю"], id: 72 },
  { data: ["?", "/", ",", "."], id: 73 },
  {
    data: [
      "Page",
      <TfiArrowCircleUp
        style={{
          width: "7px",
          height: "7px",
        }}
      />,
      <TfiArrowCircleUp style={styleSVGArrow} />,
    ],
    id: 74,
  },
  { data: ["Shift"], id: 75 },
];

export const btn5Space = [
  { data: ["Ctrl"], id: 76 },
  { data: ["FN"], id: 77 },
  { data: [<TfiMicrosoftAlt style={styleSVGArrow} />], id: 78 },
  { data: ["Alt"], id: 79 },
  { data: [""], id: 80 },
  { data: ["AltGr"], id: 81 },
  {
    data: [
      "Ctrl",
      "",
      <TfiAlignJustify
        fill="#62bef3"
        style={{ width: "7px", height: "10px" }}
      />,
    ],
    id: 82,
  },
  { data: ["Home", <TfiArrowCircleLeft style={styleSVGArrow} />], id: 83 },
  {
    data: [
      "Page",
      <TfiArrowCircleDown
        style={{
          width: "7px",
          height: "7px",
        }}
      />,
      <TfiArrowCircleDown style={styleSVGArrow} />,
    ],
    id: 84,
  },
  { data: ["End", <TfiArrowCircleRight style={styleSVGArrow} />], id: 85 },
];

export const notesData = [
  {
    data: [
      `Я вас любил: любовь еще, быть может,`,
      `В душе моей угасла не совсем;`,
      `Но пусть она вас больше не тревожит;`,
      `Я не хочу печалить вас ничем...`,
    ],
    modificator: "one",
  },
  {
    data: [
      `Зима недаром злится,`,
      `Прошла ее пора —`,
      `Весна в окно стучится`,
      `И гонит со двора.`,
      `И все засуетилось,`,
      `Все нудит Зиму вон —`,
      `И жаворонки в небе`,
      `Уж подняли трезвон...`,
    ],
    modificator: "two",
  },
  {
    data: [
      `Послушайте!`,
      `Ведь, если звезды зажигают —
    значит — это кому-нибудь нужно?`,
      `Значит — кто-то хочет, чтобы они были?`,
    ],
    modificator: "three",
  },
  {
    data: [
      `Кто душою благороден,
    а религия своя,
    с ним у нас нет разных родин.`,
      `Люди – родина моя.`,
      `Я в тебе родился снова.
    Ты шепни, любимая,
    нашим детям в дар три слова:`,
      `Люди – родина моя...`,
    ],
    modificator: "four",
  },
];
