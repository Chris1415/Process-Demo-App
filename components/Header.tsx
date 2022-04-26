import React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from "next/link";

function Header() {
  return (
    <div>
 <header  className={[styles.header, styles.fixed].join(
      " "
    )}>
      <Link href={{ pathname: '/' }}><a> <Image
        src="/logo.png"
        alt="Sitecore Logo"
        height={50}
        width={80} />
        </a></Link>
        <div className={styles.Navigation}>
        <ul>
          <li>
          <Link href={{ pathname: '/Content/Overview' }}><a> News
        </a></Link>
          </li>
          <li>
          <Link href={{ pathname: '/Events/Overview' }}><a> Events
        </a></Link>
          </li>
          <li>
          <Link href={{ pathname: '/Accounts/Login' }}><a> Login
        </a></Link>
          </li>
        </ul>
        </div>
    </header>
    <header className={styles.header}></header>
    </div>   
  );
}

export default Header;
