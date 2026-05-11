import { ShoppingBag } from "lucide-react"

import plant1 from "../assets/plants/plant1.png"
import plant2 from "../assets/plants/plant2.png"
import plant3 from "../assets/plants/plant8.png"
import plant4 from "../assets/plants/plant4.png"
import plant5 from "../assets/plants/plant5.png"
import plant6 from "../assets/plants/plant7.png"

const products = [

  {
    id: 1,
    image: plant1,
    name: "Aglaonema plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
  },

  {
    id: 2,
    image: plant2,
    name: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush decorative leaves with different shapes and sizes.",
    price: "Rs. 380/-",
  },

  {
    id: 3,
    image: plant3,
    name: "Cactus",
    desc: "It is known for their ability to thrive in arid environments.",
    price: "Rs. 259/-",
  },

  {
    id: 4,
    image: plant4,
    name: "Swiss cheese Plant",
    desc: "It is a popular tropical houseplant known for its distinctive perforated leaves.",
    price: "Rs. 400/-",
  },

  {
    id: 5,
    image: plant5,
    name: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its striking appearance.",
    price: "Rs. 450/-",
  },

  {
    id: 6,
    image: plant6,
    name: "Agave plant",
    desc: "The Agave plant is known for thick fleshy leaves and beautiful structure.",
    price: "Rs. 359/-",
  },

]

function TopSellingPlants() {

  return (

    <section className="px-5 md:px-12 py-20">

      {/* TITLE */}

      <div className="flex justify-center mb-16">

        <h2 className="text-white text-3xl md:text-5xl font-bold relative">

          Our Top Selling Plants

          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-20 h-[3px] bg-lime-400 rounded-full"></span>

        </h2>

      </div>

      {/* PRODUCTS GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 max-w-[1400px] mx-auto">

        {products.map((item) => (

          <div
            key={item.id}
            className="
              relative
              h-full
              min-h-[420px]
              rounded-[42px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              overflow-hidden
              px-6
              md:px-7
              pb-7
              pt-4
              shadow-[0_0_35px_rgba(0,255,120,0.07)]
              hover:border-lime-400/20
              duration-300
            "
          >

            {/* TOP CURVE */}

            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-white/10 rounded-tl-[42px]"></div>

            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10 rounded-tr-[42px]"></div>

            {/* IMAGE */}

            <div className="flex justify-center -mt-5 md:-mt-4">

              <img
                src={item.image}
                alt={item.name}
                className="
                  w-[200px]
                  sm:w-[180px]
                  md:w-[260px]
                  h-[170px]
                  sm:h-[180px]
                  md:h-[260px]
                  object-contain
                "
              />

            </div>

            {/* CONTENT */}

            <div className="mt-2 flex flex-col h-[170px]">

              <h2 className="text-white text-[20px] md:text-[22px] leading-tight font-medium">

                {item.name}

              </h2>

              <p className="text-gray-300 text-[13px] md:text-sm leading-5 mt-3 flex-1">

                {item.desc}

              </p>

              {/* PRICE + BUTTON */}

              <div className="flex items-center justify-between mt-5">

                <h3 className="text-white text-[30px] md:text-[34px] leading-none font-medium">

                  {item.price}

                </h3>

                <button
                  className="
                    w-10
                    h-10
                    rounded-xl
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:bg-white
                    hover:text-black
                    duration-300
                  "
                >

                  <ShoppingBag size={17} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  )

}

export default TopSellingPlants