import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-[#efe7db] bg-[#fffaf2]/95 px-4 py-3 shadow-sm backdrop-blur sm:px-6 lg:px-9">
      <div className="leading-none drop-shadow-sm">
        <span className="block -rotate-3 font-fredoka text-4xl text-yellow [text-shadow:2px_2px_0_#001b4d,4px_4px_0_#ff2f62] sm:text-5xl">
          Andy's
        </span>
        <span className="block -mt-1 rounded-full bg-blue px-2 py-0.5 text-center font-nunito text-[10px] font-extrabold tracking-wide text-white">
          FROZEN CUSTARD
        </span>
      </div>

      <ul className="hidden items-center gap-7 list-none xl:flex">
        {['MENU', 'ORDER ONLINE', 'LOCATIONS', 'ABOUT', 'CATERING', 'REWARDS'].map(link => (
          <li key={link}>
            <a
              href="#"
              className="text-dark font-extrabold text-sm tracking-wide hover:text-pink transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <div className="hidden items-start gap-2 text-left text-xs leading-snug text-dark lg:flex">
          <IoLocationSharp className="mt-0.5 text-xl text-blue" />
          <span>
            <span className="block font-bold text-dark">2301 Kaliste Saloom Rd,</span>
            Lafayette, LA
          </span>
        </div>
        <button className="hidden rounded-full bg-pink px-7 py-3 text-sm font-extrabold tracking-widest text-white shadow-lg shadow-pink/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:block">
          ORDER NOW
        </button>
        <button className="grid size-11 place-items-center rounded-full bg-white text-xl text-dark shadow-sm ring-1 ring-[#efe7db] xl:hidden" aria-label="Open menu">
          <MdOutlineRestaurantMenu />
        </button>
      </div>

    </nav>
  )
}

export default Navbar
