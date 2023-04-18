import Header from '@/components/Header/Header'
import './globals.css'

export const metadata = {
    title: "Le bon grain de l'ivraie",
    description: 'Mathieu PETOT',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {



    return (
        <html lang="fr">
            <body >
                <Header />
                {children}
            </body>
        </html>
    )
}
