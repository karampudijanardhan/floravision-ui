import { Play, ChevronRight, Star, ShoppingBag } from "lucide-react"

import plant1 from "../assets/plants/plant1.png"
import plant2 from "../assets/plants/plant2.png"
import plant3 from "../assets/plants/plant3.png"
import heroBg from "../assets/backgrounds/hero-bg.png"

function HeroSection() {

  return (

    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
        minHeight: "100vh"
      }}
    >

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/55"></div>

      {/* GREEN GLOW */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* HERO SECTION */}

        <div className="min-h-screen flex items-center px-5 md:px-10 lg:px-16 pt-24 pb-20">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">

            {/* LEFT SIDE */}

            <div className="w-full lg:w-1/2">

              <p className="text-white text-[45px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-none">

                Earth’s Exhale

              </p>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7 mt-5 max-w-2xl">

                “Earth Exhale” symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.

              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap items-center gap-4 mt-8">

                <button className="border border-white text-white px-6 md:px-8 py-3 rounded-xl hover:bg-white hover:text-black duration-300">

                  Buy Now

                </button>

                <div className="flex items-center gap-3">

                  <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black duration-300">

                    <Play size={14} fill="white" />

                  </button>

                  <p className="text-white text-sm md:text-base">

                    Live Demo...

                  </p>

                </div>

              </div>

              {/* REVIEW CARD */}

              <div className="mt-12 md:mt-20 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,255,100,0.1)] rounded-[28px] p-5 w-full max-w-[320px]">

                <div className="flex items-center gap-3">

                  <img
                    src={plant1}
                    alt="review"
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="text-white text-base md:text-lg">

                      Ronnie Hamill

                    </h3>

                    <div className="flex gap-1 mt-1">

                      <Star size={12} fill="#facc15" className="text-yellow-400" />
                      <Star size={12} fill="#facc15" className="text-yellow-400" />
                      <Star size={12} fill="#facc15" className="text-yellow-400" />
                      <Star size={12} fill="#facc15" className="text-yellow-400" />
                      <Star size={12} fill="#facc15" className="text-yellow-400" />

                    </div>

                  </div>

                </div>

                <p className="text-gray-300 text-sm leading-6 mt-4">

                  I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.

                </p>

              </div>

            </div>

            {/* RIGHT SIDE CARD */}

            <div className="w-full lg:w-auto flex justify-center">

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,255,100,0.12)] rounded-[45px] p-6 md:p-8 w-full h-140 max-w-[300px]">

                <img
                  src={plant1}
                  alt="plant"
                  className="w-full object-contain -mt-5"
                />

                <div>

                  <p className="text-gray-300 text-sm">

                    Indoor Plant

                  </p>

                  <div className="flex items-center justify-between mt-3 gap-3">

                    <h2 className="text-white text-3xl md:text-4xl leading-tight">

                      Aglaonema plant

                    </h2>

                    <ChevronRight className="text-white shrink-0" />

                  </div>

                  <button className="mt-6 border border-white text-white px-6 py-3 rounded-xl w-full hover:bg-white hover:text-black duration-300">

                    Buy Now

                  </button>

                  {/* DOTS */}

                  <div className="flex gap-3 mt-7 justify-center">

                    <div className="w-5 h-2 bg-white rounded-full"></div>

                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>

                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* TRENDING SECTION */}

        <div className="px-5 md:px-10 lg:px-14 pb-20">

          {/* TITLE */}

          <div className="flex justify-center mb-14">

            <h2 className="text-white text-3xl md:text-5xl font-bold relative text-center">

              Our Trendy plants

              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 md:w-24 h-[3px] bg-lime-400 rounded-full"></span>

            </h2>

          </div>

          {/* FIRST CARD */}

          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-8 md:py-10 mb-10 shadow-[0_0_40px_rgba(0,255,100,0.08)]">

            <div className="flex justify-center w-full lg:w-1/2">

              <img
                src={plant2}
                alt="plant"
                className="w-[240px] sm:w-[300px] md:w-[380px] object-contain"
              />

            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">

              <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight">

                For Your Desks Decorations

              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-7 mt-5">

                I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!

              </p>

              <h3 className="text-white text-3xl md:text-4xl font-bold mt-6">

                Rs. 599/-

              </h3>

              <div className="flex items-center gap-4 mt-7">

                <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black duration-300">

                  Explore

                </button>

                <button className="w-12 h-12 rounded-xl border border-white text-white flex items-center justify-center hover:bg-white hover:text-black duration-300">

                  <ShoppingBag size={18} />

                </button>

              </div>

            </div>

          </div>

          {/* SECOND CARD */}

          <div className="bg-white/[0.03] border border-cyan-400/40 backdrop-blur-xl rounded-[40px] overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between px-6 md:px-10 py-8 md:py-10 shadow-[0_0_40px_rgba(0,255,100,0.08)]">

            <div className="flex justify-center w-full lg:w-1/2">

              <img
                src={plant3}
                alt="plant"
                className="w-[220px] sm:w-[280px] md:w-[340px] object-contain"
              />

            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">

              <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight">

                For Your Desks Decorations

              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-7 mt-5">

                The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.

              </p>

              <h3 className="text-white text-3xl md:text-4xl font-bold mt-6">

                Rs. 399/-

              </h3>

              <div className="flex items-center gap-4 mt-7">

                <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black duration-300">

                  Explore

                </button>

                <button className="w-12 h-12 rounded-xl border border-white text-white flex items-center justify-center hover:bg-white hover:text-black duration-300">

                  <ShoppingBag size={18} />

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default HeroSection