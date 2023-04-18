'use client';

import React, { useState, useRef, useEffect, MouseEvent } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'



export default function Header() {
    const [change, setChange] = useState<Boolean>(false)
    const wrapperRef = useRef<HTMLDivElement>(null);

    const menus = [
        { label: 'Accueil', path: '/' },
        { label: 'Bibliographie', path: '/bibliographie' },
        { label: 'Références littéraires', path: '/references-litteraires' },
        { label: 'Références picturales', path: '/references-picturales' },
        { label: 'Contact', path: '/contact' },
    ]


    const handleClick = (e: MouseEvent) => {
        e.preventDefault()
        if (wrapperRef?.current){
            if (!wrapperRef?.current.contains(e.target as Node)) {
                setChange(false)
            }
        }
    }

    return (
        <header onClick={(e) => handleClick(e as MouseEvent)}>
            <div className={styles["menu"]} ref={wrapperRef}>
                <div className={`${styles["menu-bar"]} ${change ? styles.change : '' }`} onClick={() => setChange(!change)}>
                    <div className={`${styles.bar} ${styles.bar1} ${change ? styles.change : '' }`}></div>
                    <div className={`${styles.bar} ${styles.bar2} ${change ? styles.change : '' }`}></div>
                    <div className={`${styles.bar} ${styles.bar3} ${change ? styles.change : '' }`}></div>
                </div>

                {change &&
                    <nav className={styles.nav} >
                        <ul >
                            {menus.map((menu, key) =>
                                <li key={key}>
                                    <Link
                                        href={menu.path}
                                        onClick={() => setChange(!change)}
                                    >
                                        {menu.label}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                }
            </div>
            {change && <div className={styles["overlay"]}></div>}
            <div className={`${styles["menu-bg"]} ${change ? styles["change-bg"] : '' }`}></div>
        </header>
    )
}
