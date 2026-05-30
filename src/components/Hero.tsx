import React from 'react';
import heroImage from '../assets/images/image.png';

export const Hero: React.FC = () => {
  return (
    <section className="hero bg-[#fffaf2]">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-b-[28px] shadow-sm">
        <img
          src={heroImage}
          alt="Made fresh, made happy frozen custard hero"
          className="h-[300px] w-full object-cover object-center sm:h-[430px] lg:h-[560px] xl:h-auto"
        />
      </div>
    </section>
  );
};

export default Hero
