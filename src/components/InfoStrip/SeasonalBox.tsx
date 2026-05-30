import React from 'react';
import banner2 from '../../assets/images/miniBaner.png'

 const SeasonalBox: React.FC = () => {
  return (
    <article className="seasonal-box overflow-hidden rounded-[22px] bg-white">
      <img
        src={banner2}
        alt="Seasonal custard banner"
        className="h-[330px] w-full object-cover"
      />
    </article>
  );
};

export default SeasonalBox
