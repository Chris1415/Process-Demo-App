import React from 'react';
import styles from '../styles/Home.module.css'

function Main(props: any) {
    return (  
        <div className={styles.body}>
          {props.children}
        </div>
    );
  }
  
  export default Main;