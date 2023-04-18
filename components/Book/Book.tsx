import React, { RefObject, useRef, useState } from 'react'
import styles from './Book.module.css'
import Image from 'next/image'

import cover from '../../public/cover-light.jpg'
import Link from 'next/link'
import { TiArrowRight, TiShoppingCart } from 'react-icons/ti'

type Props = {
    bookRef : RefObject<HTMLDivElement>;
}

export default function Book ({bookRef} : Props) {


    return (
        <>
            <div className={styles.book} ref={bookRef}>
                <div className={styles.header} >
                    <h1 className={styles.author}>Mathieu Petot</h1>
                    <h2 className={styles.title}>{`Le bon grain de l'ivraie`}</h2>
                </div>
                <Image className={styles.cover} src={cover} alt="cover - Le bon grain de l'ivraie - Mathieu PETOT" />
                <Link
                    href="https://www.librinova.com/librairie/mathieu-petot/le-bon-grain-de-l-ivraie-1"
                    target="_blank"
                    className={styles.shop}
                >
                    <TiShoppingCart className={styles.icon}/>Librinova
                </Link>
            </div>
        </>
    )
}
