import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Welcome to Golden Era School</h1>
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    );
};

export default Homepage;
