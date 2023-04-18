import React from 'react'
import styles from './Comment.module.css'
import Image from 'next/image'
import LivresHebdo from '../../public/LivresHebdo - logo.png'
import { TiStar } from 'react-icons/ti'

export default function Comment() {
  return (
    <div className={styles.book} >
        <Image src={LivresHebdo} alt='Logo Livres Hebdo' className={styles.logo} />
        <p className={styles.text}>
            {`« Une réécriture poétique et loufoque du mythe de l'Arche de Noé qui allie habilement légèreté et profondeur. A travers les mésaventures de l'arche, l'auteur explore notre monde et son temps, ses crises humaines et environnementales ainsi que les utopies, travers et espoirs qui le caractérisent. »`}
        </p>
        <div className={styles.stars}>
            <TiStar /> <TiStar /> <TiStar /> <TiStar /> <TiStar />
        </div>
    </div>
  )
}
