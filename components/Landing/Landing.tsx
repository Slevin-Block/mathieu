'use client'

import React from 'react'
import styles from './Landing.module.css'
import { useState, MouseEvent, useRef } from 'react'
import Book from '@/components/Book/Book';
import { TiChevronRight } from 'react-icons/ti';
import FourthCover from '@/components/FourthCover/FourthCover';
import Comment from '@/components/Comment/Comment';

function Landing() {

    const book = useRef<HTMLDivElement>(null);
    const fourthCover = useRef<HTMLDivElement>(null);
    const comment = useRef<HTMLDivElement>(null);
    const bookRef = useRef<HTMLDivElement>(null);

    const scrollToFourthCover = () => {
        if (fourthCover.current) fourthCover.current.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToComment = () => {
        if (comment.current) comment.current.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollToTop = () => {
        if (book.current) book.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <main >
            <section className={styles.book} ref={book} >
                <h3 className={styles.subTitle}>Découvrez le roman </h3>
                <Book bookRef={bookRef} />
                <div className={styles.next} >
                    <TiChevronRight className={styles.chevronDown} onClick={scrollToFourthCover} />
                </div>
            </section>

            <section className={styles.fourthCover} ref={fourthCover}>
                <h3 className={styles.subTitle}>L’histoire de Noé comme vous ne l’avez jamais lue !</h3>
                <FourthCover />
                <div className={styles.next} >
                    <TiChevronRight className={styles.chevronDown} onClick={scrollToComment} />
                </div>
            </section>

            <section className={styles.comment} ref={comment}>
                <h3 className={styles.subTitle}>Déjà apprécié !</h3>
                <Comment />
                <div className={styles.next} >
                    <TiChevronRight className={styles.chevronTop} onClick={scrollToTop} />
                </div>
            </section>
        </main>
    )
}

export default Landing