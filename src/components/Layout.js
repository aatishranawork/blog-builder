import React from 'react'
import Navbar from './Navbar'
import '../global.css'
import * as styles from './Layout.module.css';
import Header from './Header';

export default function Layout({ children }) {

    const [navBarExpanded, setNavBarExpanded] = React.useState(false);

    const handleClick = () => {
        setNavBarExpanded(!navBarExpanded);
    };

    return (
        <div className={styles.layout_outer}>
            <Header handleClick={handleClick} />
            <div className={styles.layout_inner}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>

                <div className={styles.navbar2} style={navBarExpanded ? { left: "0px", boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.4)" } : { left: "-300px", boxShadow: "none" }}>
                    <p style={{ margin: "10px 10px 0px 0px", textAlign: "right" }}
                        onClick={handleClick}
                        onKeyDown={event => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                handleClick();
                            }
                        }}
                        role="button"
                        tabIndex="0">
                        X
                    </p>
                    <Navbar />
                </div>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}