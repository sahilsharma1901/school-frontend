import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import styles from "./UpdateStudent.module.css";
import axios from "axios";

const UpdateStudent = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    standard: "",
    rollNumber: "",
    address: "",
  });

  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    const fetchStudentData = async (id) => {
        
        const res = await axios.get(`http://localhost:5000/students/${id}`);
        const {name, age, standard, rollNumber, address} = res.data.student;
        setStudentData({
            name,
            age,
            standard,
            rollNumber,
            address
        });
    }
    fetchStudentData(id);
  }, [id]);


  const inputChangeHandler = (event) => {
    setStudentData({ ...studentData, [event.target.name]: event.target.value });
  };

  const addStudentHandler = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:5000/students/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    history.goBack();
  };

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Update a Student</h1>
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
          Update Student
        </button>
      </form>
    </React.Fragment>
  );
};

export default UpdateStudent;
