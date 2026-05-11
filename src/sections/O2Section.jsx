import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import plant1 from "../assets/plants/plant1.png"
import plant4 from "../assets/plants/plant4.png"
import plant5 from "../assets/plants/plant5.png"
import plant2 from "../assets/plants/plant2.png"

const slides = [

  {
    id: 1,
    image: plant1,
    title: "We Have Small And Best O2 Plants Collection’s",
    desc1:
      "Oxygen-producing plants, often referred to as “O2 plants,” are those that release oxygen into the atmosphere through the process of photosynthesis.",
    desc2:
      "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene.",
  },

  {
    id: 2,
    image: plant4,
    title: "Tropical O2 Plants For Your Living Space",
    desc1:
      "Tropical plants are excellent oxygen producers that thrive indoors and adapt well to indoor lighting conditions.",
    desc2:
      "These plants also create a refreshing and vibrant environment while improving indoor air quality.",
  },

  {
    id: 3,
    image: plant5,
    title: "Low Maintenance O2 Plants For Everyone",
    desc1:
      "These hardy plants require minimal watering and care while still producing significant amounts of oxygen.",
    desc2:
      "Perfect for beginners and busy individuals who still want greenery inside their homes.",
  },

  {
    id: 4,
    image: plant2,
    title: "Elegant O2 Plants For Modern Interiors",
    desc1:
      "These beautifully shaped plants complement modern interior designs while purifying indoor air.",
    desc2:
      "They serve as both decorative elements and natural oxygen-producing companions.",
  },

]

function O2Section() {

  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const slide = slides[current]

  return (

    <section className="px-5 md:px-12 py-20">

      {/* TITLE */}

      <div className="flex justify-center mb-16">

        <h2 className="text-white text-3xl md:text-5xl font-bold relative">

          Our Best o2

          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-20 h-[3px] bg-lime-400 rounded-full"></span>

        </h2>

      </div>

      {/* MAIN CARD */}

      <div
        className="
          relative
          max-w-[1400px]
          mx-auto
          rounded-[45px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          overflow-hidden
          shadow-[0_0_40px_rgba(0,255,120,0.06)]
        "
      >

        {/* TOP CURVE */}

        <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-white/10 rounded-tl-[45px]"></div>

        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10 rounded-tr-[45px]"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-10 md:py-14 gap-10">

          {/* LEFT IMAGE */}

          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src={slide.image}
              alt="plant"
              className="
                w-[260px]
                sm:w-[320px]
                md:w-[380px]
                lg:w-[450px]
                object-contain
                transition-all
                duration-500
              "
            />

          </div>

          {/* RIGHT CONTENT */}

          <div className="w-full lg:w-1/2">

            <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight max-w-xl">

              {slide.title}

            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-7 mt-6">

              {slide.desc1}

            </p>

            <p className="text-gray-300 text-sm md:text-base leading-7 mt-5">

              {slide.desc2}

            </p>

            {/* BUTTON + SLIDER */}

            <div className="flex items-center justify-between flex-wrap gap-6 mt-8">

              <button
                className="
                  border
                  border-white/30
                  text-white
                  px-7
                  py-3
                  rounded-xl
                  hover:bg-white
                  hover:text-black
                  duration-300
                "
              >

                Explore

              </button>

              <div className="flex items-center gap-4">

                <button
                  onClick={prevSlide}
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:text-black
                    duration-300
                  "
                >

                  <ChevronLeft size={18} />

                </button>

                <p className="text-white text-sm">

                  {String(current + 1).padStart(2, "0")}/
                  {String(slides.length).padStart(2, "0")}

                </p>

                <button
                  onClick={nextSlide}
                  className="
                    w-10
                    h-10
                    rounded-full
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

                  <ChevronRight size={18} />

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default O2Section