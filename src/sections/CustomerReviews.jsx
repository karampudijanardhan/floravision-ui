import { Star } from "lucide-react"

const reviews = [

  {
    id: 1,
    name: "Shelly Russel",
    stars: 4,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80",
  },

  {
    id: 2,
    name: "Lula Rolfson",
    stars: 4,
    text: "Each one has its own unique charm and personality and they've already started brightening up my space.",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=80",
  },

  {
    id: 3,
    name: "Carol Huels",
    stars: 4,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment!",
    avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=80",
  },

]

function CustomerReviews() {

  return (

    <section className="px-5 md:px-12 py-20">

      {/* TITLE */}

      <div className="flex justify-center mb-16">

        <h2 className="text-white text-3xl md:text-5xl font-bold relative">

          Customer Review

          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-20 h-[3px] bg-lime-400 rounded-full"></span>

        </h2>

      </div>

      {/* REVIEW CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1300px] mx-auto">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="
              relative
              rounded-[38px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              overflow-hidden
              px-6
              py-7
              shadow-[0_0_30px_rgba(0,255,120,0.05)]
              hover:border-lime-400/20
              duration-300
            "
          >

            {/* TOP CURVE */}

            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/10 rounded-tl-[38px]"></div>

            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/10 rounded-tr-[38px]"></div>

            {/* PROFILE */}

            <div className="flex items-center gap-4">

              <img
                src={review.avatar}
                alt={review.name}
                className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                  border
                  border-white/20
                "
              />

              <div>

                <h3 className="text-white text-[20px] font-medium">

                  {review.name}

                </h3>

                {/* STARS */}

                <div className="flex gap-1 mt-1">

                  {[1, 2, 3, 4, 5].map((item) => (

                    <Star
                      key={item}
                      size={13}
                      className={
                        item <= review.stars
                          ? "text-yellow-400"
                          : "text-white/20"
                      }
                      fill={
                        item <= review.stars
                          ? "#facc15"
                          : "none"
                      }
                    />

                  ))}

                </div>

              </div>

            </div>

            {/* TEXT */}

            <p className="text-gray-300 text-sm leading-6 mt-6 min-h-[90px]">

              {review.text}

            </p>

          </div>

        ))}

      </div>

    </section>

  )

}

export default CustomerReviews