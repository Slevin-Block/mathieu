import Landing from '@/components/Landing/Landing';
import SocialNetwork from '@/components/SocialNetwork/SocialNetwork';

type HomeProps = {};

export default function Home(props: HomeProps) {

    return (
        <>
            <SocialNetwork />
            <Landing />
        </>
    )
}
