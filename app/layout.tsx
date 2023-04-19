import Header from '@/components/Header/Header'
import './globals.css'
import Head from 'next/head'

export const metadata = {
    title: "Le bon grain de l'ivraie",
    description: 'Mathieu PETOT',
}

// To fullscreen in Next Js: https://stackoverflow.com/questions/65832820/next-js-viewport-meta-tags-should-not-be-used-in-document-jss-head
export default function RootLayout({ children }: { children: React.ReactNode}) {

    return (
        <html lang="fr">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <body >
                <Header />
                {children}
            </body>
        </html>
    )
}
