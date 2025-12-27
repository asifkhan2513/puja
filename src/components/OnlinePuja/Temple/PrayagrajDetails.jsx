import React from "react";

const PrayagrajDetails = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 via-red-50 to-amber-100 font-sans scroll-smooth">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/30218192/pexels-photo-30218192.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-orange-900/40"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-orange-600 hover:border-orange-600 border border-white/30 transition-all duration-300 font-bold tracking-wide shadow-lg cursor-pointer transform hover:scale-105"
        >
          ← Back
        </button>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl font-serif tracking-wide mb-6 animate-pulse">
            Prayagraj
          </h1>
          <div className="w-32 h-1.5 bg-linear-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-8 shadow-lg animate-pulse"></div>
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-3 rounded-2xl border-2 border-white/30 shadow-xl">
            <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto leading-relaxed font-serif">
              The Land of Sangam and Salvation
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO SECTION */}
        <div className="bg-white/70 p-8 rounded-3xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="space-y-6 text-lg leading-loose text-gray-800 font-medium">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-red-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              Called the "Tirtharaj" or the king of pilgrimages, Prayagraj is
              where material and celestial worlds confluence. For a seeker of
              spirituality, exploring Prayagraj is nothing short of time travel,
              not through ruins and buildings but into the very heart of Vedic
              culture.
            </p>
            <p className="text-gray-700">
              Based on the sacred sites listed in your notes, here is a
              comprehensive guide to the spiritual landscape of Prayagraj,
              designed for a spiritual audience.
            </p>
          </div>
        </div>

        {/* THE TRIVENI SANGAM */}
        <div className="space-y-8 bg-linear-to-br from-orange-50 to-red-100 p-8 rounded-3xl border-2 border-orange-300 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-700 to-red-800 bg-clip-text text-transparent font-serif border-l-8 border-orange-500 pl-6">
            The Triveni Sangam: The Confluence of Souls
          </h1>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200 ring-2 ring-red-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://holidays.tripfactory.com/blogs/wp-content/uploads/sites/6/2025/01/Triveni-Sangam.webp"
              alt="Triveni Sangam"
              className="w-full h-80 md:h-[500px] object-cover hover:scale-110 transition duration-1000 ease-in-out"
            />
          </div>
          <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
            <p>
              The spiritual quest of Prayagraj automatically kickstarts at
              Sangam. This is where three of India's holiest rivers, the Ganga,
              the Yamuna and the mythical, invisible Saraswati meet. One drop of
              the nectar (Amrit) fell here into the water during the Samudra
              Manthan; it is believed to have become a haven for purification.
            </p>
            <p>
              Bathing in the Sangam is reputed to wash away a lifetime of sins.
              The sight of the boat in the muddy and slushy waters of river
              Ganga merging with the deep turquoise colour of Yamuna is symbolic
              of an individual soul's bonding with God.
            </p>
          </div>
        </div>

        {/* SHRI VENI MADHAV MANDIR */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-700 to-orange-800 bg-clip-text text-transparent font-serif border-b-4 border-red-400 pb-2 inline-block">
            Shri Veni Madhav Mandir: The Deity To Be Worsiped
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-200 ring-2 ring-orange-300 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://www.bhartiyadharohar.com/wp-content/uploads/2025/01/beni-madhav-temple-1.jpg"
                alt="Shri Veni Madhav Mandir"
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
            <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
              <p>
                While many people go to the banks of various rivers, the Veni
                Madhav Mandir is specially worshipped as "Pradhan Devta" or main
                deity of Prayag. Situated in Daraganj area, it is considered to
                be incomplete without darshan of Veni Madhav during Prayagraj
                visit.
              </p>
              <p>
                Veni Madhav is the deity depicted his protective aspect of Lord
                Vishnu. The temple has traditionally been regarded as special
                abode of Shri Chaitanya Mahaprabhu. Quiet and age-old
                reverberation fills the air here in contrast to the busy river
                banks.
              </p>
            </div>
          </div>
        </div>

        {/* BADE HANUMANJI */}
        <div className="space-y-8 bg-linear-to-br from-red-50 to-orange-100 p-8 rounded-3xl border-2 border-red-300 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-700 to-orange-800 bg-clip-text text-transparent font-serif border-l-8 border-red-500 pl-6">
            Bade Hanumanji (Letewale): The Laying Guardian
          </h1>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-200 ring-2 ring-orange-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFFb-11vF3eKabgMLFpYVVWTDvrD49jVKYA&s"
              alt="Bade Hanumanji"
              className="w-full h-80 md:h-[400px] object-cover hover:scale-110 transition duration-1000"
            />
          </div>
          <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
            <p>
              The most famous of all the temples in the city is Bade Hanuman
              Mandir, which has an exclusive "Letewale" (Reclining) Idol of Lord
              Hanuman. This is the only temple to have the image of god Hanuman
              in a sleeping posture.
            </p>
            <p>
              It is believed that when Hanumanji burnt Lanka then he had come
              here to take rest. Then, there is the fascinating tradition of
              monsoon and Ganga's waters; when it rises during monsoon,
              apparently it does so to "touch the feet" of the Lord. Pilgrims
              come here to request protection and fortitude in facing worldly
              challenges.
            </p>
          </div>
        </div>

        {/* NAG VASUKI MANDIR */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-700 to-red-800 bg-clip-text text-transparent font-serif border-b-4 border-orange-400 pb-2 inline-block">
            Nag Vasuki Mandir: The Serpent Lord
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium bg-white/60 p-6 rounded-2xl border border-orange-200 shadow-lg">
              <p>
                It is located on the Ganga, in the northern part of the city and
                is named after Vasuki who was an ardent devotee of lord shiva.
                This temple is special because of its architectural beauty and
                particular spiritual vibrations, which are located here only,
                get astrologically inclined that can help them in a reduction of
                planet venoms or Kaal Sarp Dosh. On the Nag Panchami day, the
                temple turns into a bedlam of fervent worship which encapsulates
                our relationship with natural inscrutability.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200 ring-2 ring-red-300 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://images.tv9hindi.com/wp-content/uploads/2025/07/whatsapp-image-2025-07-28-at-3.36.27-pm.jpeg"
                alt="Nag Vasuki Mandir"
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* ALOPI SHANKARI DEVI MANDIR */}
        <div className="space-y-8 bg-linear-to-br from-orange-50 to-red-100 p-8 rounded-3xl border-2 border-orange-300 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-700 to-red-800 bg-clip-text text-transparent font-serif border-l-8 border-orange-500 pl-6">
            Alopi Shankari Devi Mandir: The Unseen Energy
          </h1>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200 ring-2 ring-red-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://placeapp.in/wp-content/uploads/2025/01/images-44.jpeg.webp"
              alt="Alopi Shankari Devi Mandir"
              className="w-full h-80 md:h-[400px] object-cover hover:scale-110 transition duration-1000"
            />
          </div>
          <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
            <p>
              Alopi Shankari Devi Mandir is one of the most important of Shakti
              Peeths of India. There is no stone idol here, unlike other
              temples. Instead, followers worship a wooden oily palanquin kept
              on a small stand.
            </p>
            <p>
              The name "Alopi" means "hidden" or "vanished". The last part of
              Goddess Sati's body is said to have fallen here and disappeared
              into oblivion, denoting the omnipresence of the Divine Mother. It
              is a strong haunt for meditation of the "Nirguna" (formless) form
              of God.
            </p>
          </div>
        </div>

        {/* LALITA DEVI MANDIR */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-700 to-orange-800 bg-clip-text text-transparent font-serif border-b-4 border-red-400 pb-2 inline-block">
            Lalita Devi Mandir: The Holy Peeth
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-200 ring-2 ring-orange-300 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://cdn1.prayagsamagam.com/media/2023/05/06144049/Shri-Lalita-devi-temple-prayagraj-1-1024x576.webp"
                alt="Lalita Devi Mandir"
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
            <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium bg-white/60 p-6 rounded-2xl border border-red-200 shadow-lg">
              <p>
                Another gem on the city's spiritual identity is Lalita Devi
                Mandir. It is also a Shakti Peetha, where the fingers of Sati
                fell. A feminine, nourishing energy exists within the temple.
                She is Bliss and beauty personified. Devotees come here to reap
                her blessings for spiritual realization and inner peace.
              </p>
            </div>
          </div>
        </div>

        {/* TAKSHAKESHWAR MAHADEV */}
        <div className="space-y-8 bg-linear-to-br from-red-50 to-orange-100 p-8 rounded-3xl border-2 border-red-300 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-700 to-orange-800 bg-clip-text text-transparent font-serif border-l-8 border-red-500 pl-6">
            Takshakeshwar Mahadev: The Lord Of Destruction
          </h1>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-200 ring-2 ring-orange-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOd4q3Ts4oF-gXRU7NW2TiVB5TzosNT-d1w&s"
              alt="Takshakeshwar Mahadev"
              className="w-full h-80 md:h-[400px] object-cover hover:scale-110 transition duration-1000"
            />
          </div>
          <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
            <p>
              Situated at the banks of river Yamuna in Dariyabad area,
              Takshakeshwar Mahadev is an ancient temple based upon Puranic
              history. It is dedicated to Lord Shiva and connected with the
              Takshak Naga legend. The temple is situated in a serene ambience
              and it's a great place for the Shiva devotees to perform
              Abhishekam and meditate on time and change
            </p>
          </div>
        </div>

        {/* SURYATANKESHWAR MAHADEV */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-700 to-red-800 bg-clip-text text-transparent font-serif border-b-4 border-orange-400 pb-2 inline-block">
            Suryatankeshwar Mahadev
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium bg-white/60 p-6 rounded-2xl border border-orange-200 shadow-lg">
              <p>
                The Suryatankeshwar Mahadev temple is a testament to the
                synthesis of solar worship and Shaivism. Historically, Prayag
                has been a center for Sun worship. This temple is believed to be
                a place where the Sun God himself offered prayers to Lord Shiva.
                It is a site where one can pray for clarity of mind, vitality,
                and the "light" of knowledge to dispel the darkness of
                ignorance.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200 ring-2 ring-red-300 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://content.jdmagicbox.com/comp/sonbhadra/l6/9999p5445.5445.171231051339.z7l6/catalogue/shri-renukeshwar-mahadev-mandir-renukoot-sonbhadra-temples-w2o9zy13fw.jpg"
                alt="Suryatankeshwar Mahadev"
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* SOMESHWAR MAHADEV */}
        <div className="space-y-8 bg-linear-to-br from-orange-50 to-red-100 p-8 rounded-3xl border-2 border-orange-300 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-700 to-red-800 bg-clip-text text-transparent font-serif border-l-8 border-orange-500 pl-6">
            Someshwar Mahadev: The Moon's Penance
          </h1>
          <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
            <p>
              Across the river in the Arail area, an ancient temple of Someshwar
              Mahadev is closely associated with Moon God (Soma). It is believed
              that Lord Soma undertook penance here to regain his radiance.
              Situated on the banks of this river, the ancient stone carvings in
              the temple create a meditative ambience as you're transported back
              to Vedic times.
            </p>
          </div>
        </div>

        {/* NAVGRAH MANDIR */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-700 to-orange-800 bg-clip-text text-transparent font-serif border-b-4 border-red-400 pb-2 inline-block">
            Navgrah Mandir: The Celestial Harmony
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-200 ring-2 ring-orange-300 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://content.jdmagicbox.com/comp/allahabad/s4/0532px532.x532.180309201118.m8s4/catalogue/shree-navgrah-mandir-rambagh-allahabad-temples-0r9neatob5.jpg"
                alt="Navgrah Mandir"
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
            <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium bg-white/60 p-6 rounded-2xl border border-red-200 shadow-lg">
              <p>
                The Navgrah Mandir of Prayagraj is an exclusive shrine for nine
                planetary gods. In the Indian spiritual tradition, planets are
                thought to be the containers of karma. This temple enables
                devotees to pray to all the nine planets in one place, expecting
                harmonious existence of material and spiritual life. It's a way
                of reminding ourselves that we are not detached from the vast,
                interconnected cosmos.
              </p>
            </div>
          </div>
        </div>

        {/* DASHASWAMEDH MANDIR */}
        <div className="space-y-8 bg-linear-to-br from-red-50 to-orange-100 p-8 rounded-3xl border-2 border-red-300 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-red-700 to-orange-800 bg-clip-text text-transparent font-serif border-l-8 border-red-500 pl-6">
            Dashaswamedh Mandir: Place of Creation
          </h1>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-red-200 ring-2 ring-orange-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://48koskurukshetra.com/wp-content/uploads/2019/05/109-scaled.jpg"
              alt="Dashaswamedh Mandir"
              className="w-full h-80 md:h-[400px] object-cover hover:scale-110 transition duration-1000"
            />
          </div>
          <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
            <p>
              The Dashaswamedh Mandir is situated near the Daraganj ghat, Lord
              Brahma, the creator of all creatures conducted the ten horse yagna
              on this land at the time of creation. Spiritually, this site
              represents the power of sacrifice and the beginning of the cosmic
              order. It is a hot zone where the echoes of ancient rituals jangle
              at all times.
            </p>
          </div>
        </div>

        {/* SHRINGVERPUR */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-700 to-red-800 bg-clip-text text-transparent font-serif border-b-4 border-orange-400 pb-2 inline-block">
            Shringverpur (Singverpor): The Bridge of Devotion
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium bg-white/60 p-6 rounded-2xl border border-orange-200 shadow-lg">
              <p>
                Located about 45 kilometers from the main city,{" "}
                <b>Shringverpur</b> is a crucial site for followers of the
                Ramayana. It's here that Lord Rama, Sita and Lakshmana crossed
                the Ganga during their vanvaas.
              </p>
              <p>
                Here occurred the historic meeting of Lord Rama with Nishadraj
                Guha, the boatman King. The sand of Shringverpur is worshiped as
                the most sacred mud due to the supposed foot prints of
                Nishadraj, who devoted himself to God only. At this place also,
                one learns humility and how the social barriers are demolished
                due to Love for God.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200 ring-2 ring-red-300 transform hover:scale-105 transition-all duration-500">
              <img
                src="https://static.toiimg.com/thumb/msid-120672642,width-1280,height-720,imgsize-47468,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                alt="Shringverpur"
                className="w-full h-80 object-cover hover:scale-110 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* AADI GANESH MANDIR */}
        <div className="space-y-8 bg-linear-to-br from-orange-50 to-red-100 p-8 rounded-3xl border-2 border-orange-300 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-orange-700 to-red-800 bg-clip-text text-transparent font-serif border-l-8 border-orange-500 pl-6">
            Aadi Ganesh Mandir: An Auspicious Start
          </h1>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200 ring-2 ring-red-300 transform hover:scale-105 transition-all duration-500">
            <img
              src="https://www.jagranimages.com/images/newimg/20092023/20_09_2023-ganesh_mandir_23535244_7392063.jpg"
              alt="Aadi Ganesh Mandir"
              className="w-full h-80 md:h-[400px] object-cover hover:scale-110 transition duration-1000"
            />
          </div>
          <div className="space-y-4 text-lg leading-loose text-gray-800 font-medium">
            <p>
              The Aadi Ganesh Mandir symbolizes the "Aadi" or commencement. In
              Hinduism, Ganesh is always prayed to before other deities as the
              remover of obstacles. This temple is the first destination for
              pilgrims doing "Panchkosi Parikrama" of the holy city. It signals
              the setting of a successful and smooth progress along the
              spiritual path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayagrajDetails;
