import { Leaf } from "lucide-react"

function Footer() {

  return (

    <footer className="px-5 md:px-12 py-20">

      <div
        className="
          relative
          max-w-[1400px]
          mx-auto
          rounded-[40px]
          border
          border-white/10
          bg-[#0b180d]
          backdrop-blur-xl
          overflow-hidden
          px-6
          md:px-12
          py-12
          md:py-16
        "
      >

        {/* BACKGROUND LIGHT */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(70,120,70,0.08),transparent_70%)]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* LEFT SIDE */}

          <div>

            {/* LOGO */}

            <div className="flex items-center gap-3">

              <div
                
              >

                  <span>🪴</span>
              </div>

              <h2 className="text-white text-3xl font-bold">

                FloraVision.

              </h2>

            </div>

            {/* TEXT */}

            <p className="text-gray-300 text-lg leading-9 mt-8 max-w-md">

              "From lush indoor greens to vibrant outdoor blooms,
              our plants are crafted to thrive and elevate your
              living environment."

            </p>

            {/* SOCIAL */}

            <div className="flex items-center gap-8 mt-14">

              <p className="text-white text-3xl font-semibold cursor-pointer">

                FB

              </p>

              <p className="text-white text-3xl font-semibold cursor-pointer">

                TW

              </p>

              <p className="text-white text-3xl font-semibold cursor-pointer">

                LI

              </p>

            </div>

          </div>

          {/* CENTER LINKS */}

          <div className="lg:flex lg:justify-center">

            <div>

              <h3 className="text-white text-3xl font-bold mb-8">

                Quick Link’s

              </h3>

              <div className="flex flex-col gap-5">

                <a
                  href="#"
                  className="text-gray-300 text-2xl hover:text-white duration-300"
                >

                  Home

                </a>

                <a
                  href="#"
                  className="text-gray-300 text-2xl hover:text-white duration-300"
                >

                  Type’s Of plant’s

                </a>

                <a
                  href="#"
                  className="text-gray-300 text-2xl hover:text-white duration-300"
                >

                  Contact

                </a>

                <a
                  href="#"
                  className="text-gray-300 text-2xl hover:text-white duration-300"
                >

                  Privacy

                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <h3 className="text-white text-3xl font-bold mb-8">

              For Every Update.

            </h3>

            {/* EMAIL BOX */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                overflow-hidden
                rounded-xl
                border
                border-white/30
                bg-white/[0.03]
              "
            >

              <input
                type="email"
                placeholder="Enter Email"
                className="
                  flex-1
                  bg-transparent
                  text-white
                  placeholder:text-gray-400
                  px-2
                  py-4
                  outline-none
                  text-lg
                "
              />

              <button
                className="
                  bg-white
                  text-black
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  hover:bg-lime-300
                  duration-300
                "
              >

                SUBSCRIBE

              </button>

            </div>

            {/* COPYRIGHT */}

            <p className="text-gray-300 text-xl mt-24">

              FloraVision © all right reserve

            </p>

          </div>

        </div>

      </div>

    </footer>

  )

}

export default Footer