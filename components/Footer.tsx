import React from 'react';
import styles from '../styles/Home.module.css'

class Footer extends React.Component{
  render(){
    return (  
      <div className={styles.footer}>
        <hr />
        <p> Copyright ©Christian Hahn &amp; Anna Bründel {new Date().getFullYear()} </p>  
      </div>
    );
  } 
}

export default Footer;
