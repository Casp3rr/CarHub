'use client'
import Image from 'next/image'
import { CustomButton } from "@/components/index";
import {Herro, heroBg, porsche} from "@/public ";


const Hero = () => {
    const handleScroll = () => {
    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
               <h1 className="hero__title">
                   Find Book, or rent a car — quickly and easily!
               </h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience and get the best deals every time.
                </p>
                <CustomButton
                title='Explore Cars'
                containerStyles='mt-10 rounded-full bg-primary-blue text-white'
                handle={handleScroll}
                />
            </div>

            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image
                        src={porsche}
                        alt='hero'
                        fill className="object-contain "
                    />
                </div>
                <div className='hero__image-overlay'>
                    <Image
                        src={heroBg}
                        alt='hero'


                    />
                </div>

            </div>

        </div>
    );
};

export default Hero;