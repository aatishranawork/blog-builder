import { Link } from 'gatsby'
import React from 'react'
import * as styles from './Header.module.css'

export default function Header({ handleClick }) {
    return (
        <div className={styles.header}>
            <div className={styles.menu}
                onClick={event => handleClick()}
                onKeyDown={event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        handleClick();
                    }
                }}
                role="button"
                tabIndex="0"
            >
                &#9776;
            </div>

            <div className={styles.headercontent}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className={styles.aatish}></div>
                    <h2 style={{ textAlign: "center", marginBottom: 0 }}>Aatish Rana</h2>
                </Link>
            </div>

        </div>
    );
}