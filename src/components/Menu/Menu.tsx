import React from 'react';
import { FaIceCream, FaPlus } from 'react-icons/fa'
import { GiCupcake, GiIceCreamCone, GiMilkCarton } from 'react-icons/gi'
import { MdCookie, MdFavoriteBorder } from 'react-icons/md'
import menuBanner from '../../assets/images/banner2.png'
import productImage from '../../assets/images/image.png'

const tabs = [
  { label: 'Concretes', Icon: FaIceCream, active: true },
  { label: 'Jackhammer', Icon: MdCookie },
  { label: 'Shakes & Malts', Icon: GiMilkCarton },
  { label: 'Toppings', Icon: GiCupcake },
  { label: 'Waffle Cones & Cups', Icon: GiIceCreamCone },
]

const menuItems = [
  'Boot Daddy',
  'Triple Chocolate',
  'Butter Pecan',
  'Nutty Waffle Crunch',
  'Snow Monster',
  'Custom Concrete',
]

export const Menu: React.FC = () => {
  return (
    <section className="menu bg-[#fffaf2] px-4 pb-5 sm:px-6 lg:px-7">
      <div className="mx-auto max-w-[1370px] overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgba(20,32,60,0.08)] ring-1 ring-[#efe7db]">
        <div className="relative">
          <img
            src={menuBanner}
            alt="Our menu banner"
            className="h-[240px] w-full rounded-t-[24px] object-cover object-center sm:h-[340px] lg:h-auto"
          />

          <div className="absolute inset-x-3 bottom-0 translate-y-1/2 rounded-full bg-white/95 p-2 shadow-[0_10px_28px_rgba(20,32,60,0.14)] ring-1 ring-[#efe7db] backdrop-blur sm:inset-x-8">
            <div className="flex gap-2 overflow-x-auto">
            {tabs.map(({ label, Icon, active }) => (
              <button
                key={label}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-wide transition-colors ${
                  active
                    ? 'bg-pink text-white shadow-lg shadow-pink/20'
                    : 'bg-white text-dark ring-1 ring-[#efe7db] hover:bg-cream'
                }`}
              >
                <Icon className="text-base" />
                {label}
              </button>
            ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-4 pt-14 sm:grid-cols-2 sm:pt-16 lg:grid-cols-3 xl:grid-cols-6">
          {menuItems.map((item, index) => (
            <article
              key={item}
              className="relative overflow-hidden rounded-[18px] bg-white p-4 shadow-[0_8px_22px_rgba(20,32,60,0.08)] ring-1 ring-[#efe7db]"
            >
              <MdFavoriteBorder className="absolute right-5 top-4 text-2xl text-pink" />
              <div className="mx-auto mb-4 grid size-32 place-items-center rounded-full bg-[#f4f8ff] sm:size-36">
                <img
                  src={productImage}
                  alt={item}
                  className="h-28 w-28 rounded-full object-cover object-[72%_48%]"
                />
              </div>
              <h3 className="font-extrabold text-dark">{item}</h3>
              <p className="mt-2 min-h-16 text-xs font-bold leading-relaxed text-[#28344f]">
                Vanilla or chocolate frozen custard blended with toppings and lots of happiness.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-extrabold text-pink">{index === 5 ? '$6.49+' : '$6.49'}</span>
                <button className="grid size-9 place-items-center rounded-full bg-pink text-white shadow-md shadow-pink/20" aria-label={`Add ${item}`}>
                  <FaPlus />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Menu
