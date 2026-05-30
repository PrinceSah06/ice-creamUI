import React from 'react';
import MapBox from '../InfoStrip/MapBox'
import SeasonalBox from '../InfoStrip/SeasonalBox'
import { VisitBox } from './VisitBox';
export const InfoStrip: React.FC = () => {
  return (
    <section className="info-strip bg-[#fffaf2] px-4 py-5 sm:px-6 lg:px-7">
      <div className="mx-auto grid max-w-[1370px] gap-4 rounded-[24px] bg-white p-4 shadow-[0_8px_30px_rgba(20,32,60,0.08)] ring-1 ring-[#efe7db] lg:grid-cols-[0.75fr_1fr_1.75fr]">
        <VisitBox />
        <MapBox />
        <SeasonalBox />
      </div>
    </section>
  );
};
export default InfoStrip
