import React, { useState, useEffect } from "react";
import styles from "./Teacher.module.css";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await fetch("http://localhost:5000/teachers");
      const teachers = await response.json();
      setTeachers(teachers.teachers);
    };
    fetchTeachers();
  }, []);
  return (
    <>
    <h2 style={{color: '#237f96', textAlign: 'center', marginTop: '1rem', marginBottom: '2rem'}}>All Teachers</h2>
    <div className={styles.teachersContainer}>
      {teachers.map((teacher, index) => {
        return (
          <div className={styles.teacherCard} key={index}>
            <h2>Mr. {teacher.name}</h2>
            <h3>
              <strong>Age :</strong> {teacher.age}
            </h3>
            <p>
              <strong>Experience: </strong> {teacher.experience} Years
            </p>
            <p>
              <strong>Salary: </strong>Rs. {teacher.salary}
            </p>
            <p>
              <strong>Address:</strong> {teacher.address}
            </p>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Teachers;
