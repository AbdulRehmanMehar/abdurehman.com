import Image from 'next/image';
import ForegroundImage from '../../assets/images/myself_bg.png';
import WaterMark from '../../assets/images/watermark.png';

export default function IntroHeader() {
    return (
        <div className='relative'>
            <Image className='absolute left-10 opacity-5 z-20 top-5' height={200} src={WaterMark} alt="Abdul Rehman - Full Stack Developer" />
            <Image priority className='absolute right-0' height={520} src={ForegroundImage} alt="Abdul Rehman - Full Stack Developer" />

            <div className='mx-20'>
                <div className='flex justify-center flex-col min-h-[500px] mx-28'>
                    <div className='lg:w-1/3 md:w-1/3'>
                        <p className='text-sm block'>Hello! I am Abdul Rehman</p>
                        <h2 className='block text-2xl mb-4 font-bold text-red-400'>Full Stack Developer</h2>
                        <p className='text-sm opacity-60'>5+ years of experience. Specialized in UX, SPAs, SSR, SaaS, Desktop Applications and Backend Infrastructures.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}