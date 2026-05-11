import { Search, ShoppingBag, Menu } from "lucide-react"

function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-12 py-5">

      <div className="flex justify-between items-center">

        {/* LOGO */}

        <h1 className="text-white text-2xl md:text-3xl font-bold flex items-center gap-2">

          <span className="text-3xl">
            🪴
          </span>

          FloraVision.

        </h1>

        {/* DESKTOP MENU */}

        <ul className="hidden lg:flex items-center gap-10 text-white text-sm">

          <li className="cursor-pointer hover:text-lime-300 duration-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-lime-300 duration-300">
            Plants Type
          </li>

          <li className="cursor-pointer hover:text-lime-300 duration-300">
            More
          </li>

          <li className="cursor-pointer hover:text-lime-300 duration-300">
            Contact
          </li>

        </ul>

        {/* ICONS */}

        <div className="flex items-center gap-4 md:gap-5 text-white">

          <Search
            size={22}
            className="cursor-pointer hover:text-lime-300 duration-300"
          />

          <ShoppingBag
            size={22}
            className="cursor-pointer hover:text-lime-300 duration-300"
          />

          {/* MOBILE MENU */}

          <button className="lg:hidden">

            <Menu
              size={24}
              className="cursor-pointer hover:text-lime-300 duration-300"
            />

          </button>

        </div>

      </div>

    </nav>

  )

}

export default Navbar