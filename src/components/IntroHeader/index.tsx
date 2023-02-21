import Image from 'next/image';
import ForegroundImage from '../../assets/images/myself_bg.png';
import WaterMark from '../../assets/images/watermark.png';

export default function IntroHeader() {
    return (
        <div className='relative'>
            <Image className='absolute left-10 opacity-5 z-20 top-5' height={200} src={WaterMark} alt="Abdul Rehman - Full Stack Developer" />
            <Image priority className='absolute right-0' height={520} src={ForegroundImage} alt="Abdul Rehman - Full Stack Developer" />
        </div>
    );
}