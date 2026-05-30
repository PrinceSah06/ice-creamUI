import React from 'react';
import Location from '../../assets/images/location.png';


export const MapBox: React.FC = () => {
  return (
    <article className="map-box overflow-hidden rounded-[22px] bg-white">
      <img
        src={Location}
        alt="Store location map"
        className="h-[330px] w-full object-cover"
      />
    </article>
  );
};

export default MapBox
