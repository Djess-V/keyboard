import React from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const daysOfTheWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export default function Calendar() {
  const dateNow = new Date();

  const tHead = (
    <thead>
      <tr>
        {daysOfTheWeek.map((item) => (
          <th>{item}</th>
        ))}
      </tr>
    </thead>
  );

  return (
    <div className="display_calendar">
      <div id="calendar_header">
        <div>
          {months[dateNow.getMonth()]} {dateNow.getFullYear()}
        </div>

        <div>
          <span>
            <SlArrowUp id="sortUp" fill="#000000" />
          </span>
          {"  "}
          <span>
            <SlArrowDown id="sortDown" fill="#000000" />
          </span>
        </div>
      </div>
      <table className="calendar_table">{tHead}</table>
    </div>
  );
}
