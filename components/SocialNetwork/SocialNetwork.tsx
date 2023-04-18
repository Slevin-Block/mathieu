import React from 'react'
import { TiMail, TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti';
import Link from 'next/link';
import styles from './SocialNetwork.module.css'

function SocialNetwork() {
  return (
    <section className={styles.socialNetwork}>

                <Link
                    href="https://www.librinova.com/librairie/mathieu-petot/le-bon-grain-de-l-ivraie-1"
                    target="_blank"
                >
                    <TiMail className={styles.icon} />
                </Link>
                <Link
                    href="https://www.librinova.com/librairie/mathieu-petot/le-bon-grain-de-l-ivraie-1"
                    target="_blank"
                >
                    <TiSocialFacebook className={styles.icon} />
                </Link>
                <Link
                    href="https://www.librinova.com/librairie/mathieu-petot/le-bon-grain-de-l-ivraie-1"
                    target="_blank"
                >
                    <TiSocialLinkedin className={styles.icon} />
                </Link>
                <Link
                    href="https://www.librinova.com/librairie/mathieu-petot/le-bon-grain-de-l-ivraie-1"
                    target="_blank"
                >
                    <TiSocialInstagram className={styles.icon} />
                </Link>
            </section>
  )
}

export default SocialNetwork