import React from 'react'
import Navbar from './Navbar'
import '../global.css'
import * as styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.layout_outer}>
            <div className={styles.layout_inner}>
                <Navbar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}