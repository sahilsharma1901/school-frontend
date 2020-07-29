import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./ClassStudents.module.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TimeTable from "../TimeTable/TimeTable";

const ClassStudents = () => {
  const { classnumber } = useParams();
  const [classStudents, setClassStudents] = useState([]);
  const [ttShow, setTTShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/classes/${classnumber}`)
      .then((res) => setClassStudents(res.data.standard[0].students));
  }, [classnumber]);

  const deleteStudentHandler = async (id) => {
    const updatedStudents = classStudents.filter(
      (student) => student._id !== id
    );
    setClassStudents(updatedStudents);
    await fetch(`http://localhost:5000/students/delete/${id}`, {
      method: "DELETE",
    });
  };

  const ttToggle = () => {
    setTTShow(!ttShow);
  }

  return (
    <div className={styles.parentContainer}>
      <h2>
        Class {classnumber}
        <sup>th</sup> Students
      </h2>
      <Link to={`/addstudent/${classnumber}`} className={styles.addStudentBtn}>
        Add a Student
      </Link>
      <div className={styles.utilities}>
        <button onClick={() => {history.goBack()}}>Back</button>
        <button onClick={ttToggle}>Time Table</button>
      </div>
      <div className={ttShow ? `${styles.timetableContainer} ${styles.show}` : styles.timetableContainer}>
        <TimeTable/>
      </div>
      <div className={styles.classStudentsContainer}>
        {classStudents.map((classStudent, index) => {
          return (
            <div className={styles.classStudentCard} key={index}>
              <h2>{classStudent.name}</h2>
              <h3>
                <strong>Roll No :</strong> {classStudent.rollNumber}
              </h3>
              <p>
                <strong>Age:</strong> {classStudent.age}
              </p>
              <p>
                <strong>Address:</strong> {classStudent.address}
              </p>
              <div className={styles.studentUtils}>
                <Link
                  className={styles.editBtn}
                  to={`/updatestudent/${classStudent._id}`}
                >
                  <EditIcon />
                </Link>
                <button
                  onClick={deleteStudentHandler.bind(null, classStudent._id)}
                  className={styles.deleteBtn}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassStudents;
