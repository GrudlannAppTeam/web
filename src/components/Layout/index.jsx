import React from 'react';
import Navbar from '../Navbar';
import styles from './index.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};

export default Layout;