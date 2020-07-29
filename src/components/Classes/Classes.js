import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./Classes.module.css";
import { Link } from 'react-router-dom';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/classes/").then(res => setClasses(res.data.standards)).catch(err => console.log(err));
    }, []);

    return (
        <>
        <h2 style={{color: "#237f96", marginTop: '1rem', textAlign: 'center'}}>All Classes</h2>
        <div className={styles.classesContainer}>
            {classes ? classes.map((oneClass, index) => {
                return (
                    <div className={styles.singleClassContainer} key={index}>
                        <h1>Class {oneClass.number}<sup>th</sup></h1>
                        <Link to={`/classes/${oneClass.number}`}>View Students</Link>
                    </div>
                );
            }) : <h2>Classes Loading..! </h2>}
        </div>
        </>
    );
};

export default Classes;
