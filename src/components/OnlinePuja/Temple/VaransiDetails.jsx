import React from "react";

const Varanasi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-100 font-sans scroll-smooth">
      {/* HERO SECTION */}
      <div
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/12319559/pexels-photo-12319559.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-amber-900/60"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:border-orange-400 border border-white/30 transition-all duration-300 font-bold tracking-wide shadow-lg cursor-pointer text-sm sm:text-base"
        >
          ← Back
        </button>

        <div className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 drop-shadow-2xl font-serif tracking-wide mb-4 sm:mb-6">
            Varanasi
          </h1>
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 sm:px-8 py-2 sm:py-3 rounded-2xl border-2 border-white/30 shadow-xl">
            <p className="text-lg sm:text-2xl md:text-4xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
              The Eternal City and Its Sacred Sanctuaries
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-14">
        {/* INTRO */}
        <div className="bg-gradient-to-br from-white via-orange-50/50 to-amber-50/50 p-6 sm:p-8 rounded-3xl border-4 border-orange-200 shadow-2xl hover:shadow-orange-200/50 transition-all duration-500">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 font-medium font-serif first-letter:text-6xl first-letter:font-bold first-letter:text-orange-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
            Considered the oldest living city in the world, Varanasi or Kashi, as
            it is rurally called, stands out not only for its spiritual essence
            but also as a place where gods meet mortals. It is located on the
            Ganges, and it was believed that if one dies here, they attain moksha.
            There are three that are the most spiritually significant, and they
            include Kashi Vishwanath Temple, Kaal Bhairav Temple, and
            Pishachmochan Kund.
          </p>
        </div>

        {/* Kashi Vishwanath Temple */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 font-serif mb-2">
              Kashi Vishwanath Temple
            </h2>
            <p className="text-lg sm:text-xl text-blue-600 font-semibold italic">
              The Lord of the Universe
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-300 ring-4 ring-blue-100 hover:ring-blue-200 transition-all duration-500">
            <img
              src="https://images.pexels.com/photos/32924878/pexels-photo-32924878.jpeg"
              alt="Kashi"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
          
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800 font-medium">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-3">The Apex of Devotion</h3>
              <p>
                The Kashi Vishwanath Temple is not just a temple; it's the spiritual
                heart of Varanasi and one of the holiest pilgrimage destinations for
                Hindus. The temple of Lord Shiva is the 12th Jyotirlinga of India,
                one among the holiest shrines dedicated to the Lord. Vishwanath is
                another name for the supreme soul god, meaning ruler of the world.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 sm:p-6 rounded-2xl border-l-4 border-indigo-500 shadow-lg">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">Mythological Significance</h3>
              <p>
                Legend has it that Kashi is the city of Hindus where Shiva placed
                his first foot on Earth. He is called the true guardian and king of
                the city." The Kashi Vishwanath temple is so revered as to make many
                statements about the intense devoutness displayed by its devotees.
                It's believed that a mere glance at the Jyotirlinga and a dip in the
                Holy Ganga will absolve you of all sins you committed in your
                lifetime, thus endowing moksha.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6 rounded-2xl border-l-4 border-purple-500 shadow-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Historical Resilience</h3>
              <p>
                The story of Kashi Vishwanath Temple is the tale of destruction
                andre-creation, an eternal testimony of faith's survival. The temple
                ofLord Shiva was built, destroyed, and rebuilt fourteen times
                overdifferent dynasties. The present impressive building was built
                in1780 by the Maratha queen Ahilya Bai Holkar of Indore.
                Worthmentioning here is the gold plating of the spire of the
                temple,which was offered by Maharaja Ranjit Singh of Punjab.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Experience for the Pilgrim</h3>
              <p>
                One gets the chills when visiting the Kashi Vishwanath temple. The
                complex is generally a lively place, home to the chants of priests
                and the scent of incense and flowers, all amid fervent devotion by
                millions who visit each year on pilgrimage. The primary ritual
                involves anointing the Jyotirlinga with Ganga water and milk, a
                practice that connects the devotee directly to the cosmos as
                represented by Shiva. The temple stands as a testament to the belief
                that Shiva's presence in Kashi is eternal and unending.
              </p>
            </div>
          </div>
        </div>

        {/* Kaal Bhairav Temple */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 font-serif mb-2">
              Kaal Bhairav Temple
            </h2>
            <p className="text-lg sm:text-xl text-red-600 font-semibold italic">
              The Keeper of Time and Protector of Kashi
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-300 ring-4 ring-red-100 hover:ring-red-200 transition-all duration-500">
            <img
              src="https://i0.wp.com/hindupost.in/wp-content/uploads/2022/11/Kaal-Bhairav.jpg?resize=696%2C522&ssl=1"
              alt="kaal"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 rounded-2xl border-2 border-red-200 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-700 mb-2">The Fierce Form of Shiva:</h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Kaal Bhairav Temple is a Hindu temple dedicated to Kaal Bhairav,
                    one of the manifestations of Shiva. In Kashi, Kaal Bhairav is
                    called only as the deity who presides over the destruction, but
                    also at par with the city's Kotwal or Chief Constable. It is
                    commonly held that no one can actually reside in Varanasi without
                    his permission, and when he dies, people will be free to live
                    there.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 sm:p-6 rounded-2xl border-2 border-orange-200 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-orange-700 mb-2">The Legend of Kaal:</h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    The mythology of Kaal Bhairav is fascinating. He was born out
                    of Shiva's wrath during a cosmic battle with Lord Brahma. Brahma
                    himself is believed to have asserted his superiority over Shiva.
                    Shiva then struck Brahma on the head with his Trishula and cut off
                    Brahma's fifth head. To repent the sin of Brahmahatya
                    (Brahminkilling), he was made to roam as a beggar. So when he came
                    to Varanasi, the penance was over, and it became his home.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-4 sm:p-6 rounded-2xl border-2 border-yellow-200 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-yellow-700 mb-2">Rituals and Offerings:</h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    The temple ambience is severe, reflecting the power of the deity.
                    Believers take along alcohol, a rite only found in the temple,
                    with flowers and sweets. A prominent ritual is seeking a sacred
                    black thread (kala dhaga) from the priests and tying it on the
                    wrists or around the neck. This thread is considered a protection
                    from black magic and evil eye, negative forces, fear for the
                    wearer, also always remains with Kaal Bhairava around such
                    devotees.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 sm:p-6 rounded-2xl border-2 border-red-200 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-red-700 mb-2">Philosophical Depth:</h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Kaal Bhairav is described as the God who controls time- it's said
                    that if one worships Kaal Bhairav, he can predict a man's life
                    accurately. Adoration of him is an acknowledgement that time, the
                    destroyer of all things, casts death on its own fearsome
                    countenance, and submission to this most ferocious feature of
                    God's face leads one to transcend fear and the terror it
                    brings even at death. The ultimate gate-keeper, he makes sure only
                    those who are wholly committed end up in the eternal city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pishachmochan Kund */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-teal-600 to-blue-700 font-serif mb-2">
              Pishachmochan Kund
            </h2>
            <p className="text-lg sm:text-xl text-green-600 font-semibold italic">
              The Liberation of Ancestors
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-green-300 ring-4 ring-green-100 hover:ring-green-200 transition-all duration-500">
            <img
              src="https://www.varanasimirror.com/wp-content/uploads/2022/01/kashi-vishwanath-temple-dham1-750x450.jpg"
              alt="Pishachmochan"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
          
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800 font-medium">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 sm:p-6 rounded-2xl border-l-4 border-green-500 shadow-lg">
              <h3 className="text-xl font-bold text-green-700 mb-3">The Sacred Tank of Ancestral Peace</h3>
              <p>
                Pishachmochan Kund is one of the important but lesser-known
                spiritual centers in Varanasi. It is not a temple but a holy water
                tank (kund) meant mainly for Shraddha. Its name is most significant
                in itself: Pishach is the 'ghost' or s'Hrit and Mochan,
                'liberating'. So the place is called the Liberator of Souls.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 sm:p-6 rounded-2xl border-l-4 border-teal-500 shadow-lg">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Exorcizing the Evil and Granting Moksha</h3>
              <p>
                The central doctrine of Pishachmochan is its ability to give mukti
                (liberation) to the tormenting souls of ancestors. There is a belief
                in some cultures that if a person dies an unnatural or untimely
                death, their soul will be stuck in the physical world, unable to
                travel onward. The ceremonies conducted here, especially in the
                fortnight of Pitru Paksha (a period meant for ancestors), are
                designed to appease these pishachas or wandering spirits.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-3">The Ritual Significance</h3>
              <p>
                Pishachmochan is believed to be among the holiest places in India
                for performing pind daan, a ritual offering of rice balls (pinda)
                dedicated to the peace of the souls of departed ancestors. Followers
                travel from near and far to perform ceremonies, aided by local
                priests, and pray for the salvation of their dead loved ones pay
                homage to deceased ancestors in the hope that they will achieve
                salvation. It is considered possible to help the ancestors achieve a
                higher form of existence elsewhere, at which time they no longer
                require these offerings.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 sm:p-6 rounded-2xl border-l-4 border-green-500 shadow-lg">
              <h3 className="text-xl font-bold text-green-700 mb-3">The Banyan Tree Connection</h3>
              <p>
                There is an old Banyan tree near the kund, which is one of the most
                interesting things in here. This tree also serves as a shrine,
                representing the mold in which life on earth was cast from that of
                the dead. The shade of the tree is used to place offerings,
                representing the protection and succour received by the souls on
                their last journey. Pishachmochan is a powerful reminder of the
                Hindu faith in family lineage and its responsibility to look after
                the souls of one's forebears.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varanasi;