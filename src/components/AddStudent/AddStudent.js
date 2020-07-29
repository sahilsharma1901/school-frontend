import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import styles from "./AddStudent.module.css";

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    standard: "",
    rollNumber: "",
    address: "",
  });
  const history = useHistory();
  const {classnumber} = useParams();

  const inputChangeHandler = (event) => {
    setStudentData({ ...studentData, [event.target.name]: event.target.value });
  };

  const addStudentHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    const addedStudent = await response.json();
    const addedStudentId = addedStudent.result._id;
    const addedStudentData = {
        number: classnumber,
        id: addedStudentId
    };

    const res = await fetch(`http://localhost:5000/classes/${classnumber}`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(addedStudentData)
    });

    console.log(await res.json());

    history.goBack();
  };

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Add a Student</h1>
      <form
        className={styles.studentFormContainer}
        onSubmit={addStudentHandler}
      >
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={studentData.name}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          value={studentData.age}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter Class"
          name="standard"
          value={studentData.standard}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter Roll Number"
          name="rollNumber"
          value={studentData.rollNumber}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter Address"
          name="address"
          value={studentData.address}
          onChange={inputChangeHandler}
          required
        />
        <button className={styles.addStudentBtn} type="submit">
          Add Student
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddStudent;
