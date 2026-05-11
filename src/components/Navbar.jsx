import { Search, ShoppingBag, Menu } from "lucide-react"

function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5">

      <div className="flex justify-between items-center">
         
        <h1 className="text-white text-3xl font-bold">
            <span>🪴</span>
          FloraVision.
        </h1>

        <ul className="hidden md:flex gap-12 text-white text-sm">

          <li>
            Home
          </li>

          <li>
            Plants Type
          </li>

          <li>
            More
          </li>

          <li>
            Contact
          </li>

        </ul>

        <div className="flex gap-5 text-white text-2xl">

          <Search />

          <ShoppingBag />

          <Menu />

        </div>

      </div>

    </nav>

  )

}

export default Navbar