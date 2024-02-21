import React from 'react'
import Image from 'next/image';


const HeroSection = () => {
    return (
        <section>
            <div className="gird grid-cols-1 lg:gird-cols-12">
                <div className="col-span-7 place-self-center">
                <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
                    Hello, I'm Jose
                </h1>
                <p className="text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint placeat architecto esse praesentium nam perferendis quidem delectus cumque aliquam unde corrupti, ea alias! Dolorum aspernatur at dolore sapiente sed magni!
                </p>
                </div>
                <div>
                    <button className="px-6 py-3 rounded full mr-4">Hire Me</button>
                    <button>Download CV</button>
                </div>
                <div className="col-span-5 place-self-center">
                    <div className=" rounded-full bg-[#101010] w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative">
                    <Image
                     src="/images/memoji.png"
                     alt="hero-image"
                     className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                     width={300}
                     height={300}
                    />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection