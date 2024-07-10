'use client';
import dynamic from 'next/dynamic';
import LandingPageSVG from "../../assets/landingpage.json";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function TypeAnimationGIF() {
    return (
        <div>
            <Lottie className='w-96 h-96' loop={true} animationData={LandingPageSVG} />
        </div>
    );
}
