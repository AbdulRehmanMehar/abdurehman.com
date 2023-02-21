import Image from 'next/image';
import ForegroundImage from '../../assets/images/myself_bg.png';

export default function IntroHeader() {
    return (
        <div className='relative'>
            <Image className='absolute right-0' height={600} src={ForegroundImage} alt="Abdul Rehman - Full Stack Developer" />
        </div>
    );
}