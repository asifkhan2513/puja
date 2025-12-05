import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Star, CheckCircle } from "lucide-react";
import LazyImage from "../../LazyImage";
import { PATH } from "../../config/Path";

const PujaTemplate = ({
  title,
  description,
  heroImage,
  pujas = [],
  benefits = [],
  testimonials = [],
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <LazyImage
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 pt-serif-bold animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-6 font-inter">{description}</p>
          <Link
            to={PATH.CHECKOUT}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-700 shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 pt-serif-bold">
              Benefits of{" "}
              <span className="text-amber-600 dark:text-amber-400 pt-serif-bold-italic">
                {title}
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pujas Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 pt-serif-bold">
            Available Pujas
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Choose from our authentic puja services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pujas.map((puja, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="image-hover-zoom h-56 relative">
                  <LazyImage
                    src={puja.image}
                    alt={puja.name}
                    className="w-full h-full object-cover"
                  />
                  {puja.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full">
                      Popular
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors pt-serif-bold">
                    {puja.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {puja.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{puja.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{puja.pandits} Pandits</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                        ₹{puja.price}
                      </span>
                      {puja.originalPrice && (
                        <span className="text-gray-500 line-through ml-2">
                          ₹{puja.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {puja.rating}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={PATH.CHECKOUT}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-700 shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 pt-serif-bold">
              What Devotees Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 pt-serif-italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-gray-900 dark:text-white">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pt-serif-bold">
            Ready to Book Your Puja?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience divine blessings with our authentic puja services
          </p>
          <Link
            to={PATH.CHECKOUT}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-100 shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Book Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PujaTemplate;
