import React from "react";
import styles from "./TimeTable.module.css";

const TimeTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <table>
          <caption>Timetable</caption>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td>9:00</td>
            <td contenteditable="">Science</td>
            <td contenteditable="">Maths</td>
            <td contenteditable=""></td>
            <td contenteditable="">Music</td>
            <td contenteditable="">Hindi</td>
            <td contenteditable="">Sports</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td contenteditable="">Art</td>
            <td contenteditable="">Maths</td>
            <td contenteditable="">English</td>
            <td contenteditable="">English</td>
            <td contenteditable=""></td>
            <td contenteditable="">Sports</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td contenteditable="">Hindi</td>
            <td contenteditable="">GK</td>
            <td contenteditable="">Drawing</td>
            <td contenteditable=""></td>
            <td contenteditable="">Lab</td>
            <td contenteditable="">Lab</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td contenteditable="">Lunch</td>
            <td contenteditable="">Lunch</td>
            <td contenteditable="">Lunch</td>
            <td contenteditable="">Lunch</td>
            <td contenteditable="">Lunch</td>
            <td contenteditable="">Lunch</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td contenteditable="">SS</td>
            <td contenteditable=""></td>
            <td contenteditable="">English</td>
            <td contenteditable="">Science</td>
            <td contenteditable=""></td>
            <td contenteditable="">Sanskrit</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td contenteditable="">Sports</td>
            <td contenteditable=""></td>
            <td contenteditable="">English</td>
            <td contenteditable="">Hindi</td>
            <td contenteditable="">Arts</td>
            <td contenteditable="">Music</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td contenteditable="">Sports</td>
            <td contenteditable="">Music</td>
            <td contenteditable="">Science</td>
            <td contenteditable=""></td>
            <td contenteditable="">Sports</td>
            <td contenteditable="">Lab</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td contenteditable="">Sanskrit</td>
            <td contenteditable="">Maths</td>
            <td contenteditable="">Karate</td>
            <td contenteditable="">Sports</td>
            <td contenteditable="">Music</td>
            <td contenteditable="">English</td>
          </tr>
          <tr>
            <td>17:00</td>
            <td contenteditable="">Lab</td>
            <td contenteditable=""></td>
            <td contenteditable="">Science</td>
            <td contenteditable="">SS</td>
            <td contenteditable="">Maths</td>
            <td contenteditable="">Dance</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
