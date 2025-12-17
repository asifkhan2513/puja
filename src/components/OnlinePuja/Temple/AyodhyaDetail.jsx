import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

const AyodhyaDetail = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-orange-100">
      {/* HERO */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/32106228/pexels-photo-32106228.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Back Button */}
        <Link
          to={PATH.SPIRITUAL_PLACES}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all font-semibold"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </Link>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300">
            Ayodhya
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            The eternal city where faith walks, devotion breathes, and Lord Ram
            lives in every heart.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <p className="text-lg leading-loose text-gray-700">
          Amid the pious Saryu River, in the heart of Uttar Pradesh, is a city
          that itself is not just a place but the soul of India’s spiritual
          grandeur, Ayodhya.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Ayodhya is also referred to as "The city of gods". According to the
          Atharvaveda, it is a city of happiness and prosperity. Strolling down
          the streets of Ayodhya is like strolling through the pages of the
          Ramayana. Each gully and ghat, each temple has its story of the early
          life of Rama, his banishment and exile, and his triumphant return.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          The air is heavy with the smell of sandalwood and incense, filled with
          incessant chants of "Sita-Ram." It’s a land where devotion is the
          currency and faith is the speech. And the city is not just home to
          temples; it is a temple unto itself, welcoming its guests to offer up
          their mundane troubles and wallow in Bhakti (devotion). A visit to
          Ayodhya is not just a journey of holy places; it’s internal
          emancipation.
        </p>
        <h2 className="text-3xl font-bold text-amber-800 font-serif border-l-4 border-amber-500 pl-4 mb-8">
          Spiritual Significance:
        </h2>

        <p className="text-lg leading-loose text-gray-700">
          The First Mokshapuri: Scriptures list Ayodhya as the foremost city
          where the soul can attain liberation
        </p>
        <p className="text-lg leading-loose text-gray-700">
          Capital of the Ikshvaku dynasty: It symbolizes transcendence,
          governance, duty, and truth.
        </p>
        <p className="text-lg leading-loose text-gray-700">
          From the security of Hanuman Garhi, to the purifying waters of Saryu,
          and finally through to the presence at Ram Mandir, one follows a route
          from preparation to purification to Realisation.
        </p>

        <h2 className="text-3xl font-bold text-amber-800 font-serif mt-12 mb-6">
          Ram Mandir: The Return of the King
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://c.ndtvimg.com/2023-12/na2ncado_ram-mandir-3d_625x300_27_December_23.jpg"
            alt="Ram Mandir"
            className="w-full h-64 md:h-[400px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          The spiritual center of Ayodhya is the Ram Mandir. It symbolises the
          deep faith and patience of millions of Hindus. It’s not just a house
          of stone – it’s a dream come true. Ram Lalla (an infant deity Ram) has
          returned to his real birthplace after hundreds of years of waiting!
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> The Main Shrine (Garbha Griha) -</span>{" "}
          The Garbha Griha, or the inner room, is perhaps the most special
          component of a temple. Here resides the statue of Ram Lalla. The idol
          depicts Lord Rama in his childhood, as a teenager. He appears
          innocent, radiant with divine light. For a tourist, seeing this idol
          is the climax of the trip. It brings an intense feeling of peace and
          joy.The faithful believe that praying at this place brings them closer
          to Lord Rama’s goodness, truth, and nobility.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">The Pilgrimage Experience -</span> A visit
          to the Ram Mandir will make a difference in your life. And you are
          walking these big halls and hearing thousands of people chanting and
          singing. You can practically feel the devotion of their energy in the
          air. It’s the perfect place to close your eyes, pray, and remind
          yourself that good always defeats evil.
        </p>
        <h2 className="text-3xl font-bold text-amber-800 font-serif mt-12 mb-6">
          Hanuman Garhi: The Guardian of Ayodhya
        </h2>
        <p>
          Before meeting Lord Rama, a devotee must first meet his most dedicated
          and loyal server, Lord Hanuman. This brings us to Hanuman Garhi, a
          fortress-like temple on the hill at the heart of the town.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://images.pexels.com/photos/3519190/pexels-photo-3519190.jpeg"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> The City's Guard -</span> Lord Hanuman is
          salutation as Kotwal (the Guard) of Ayodhya! Legend has it that after
          Lord Rama returned to heaven, Hanuman never left. He pledged to
          protect the city and its inhabitants for eternity. He still sacraments
          the holy birthplace, even though you cannot see him.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">The Steps of Faith - </span>In order to
          get to the main temple, you will have to walk up 76 long flight steps.
          This climb is like a test. The effort you expend is a costly way of
          shedding your pride and ego before you stand naked in front of God.
          Because it is designed like a fortress with towers on each corner,
          it confirms that Hanuman is keeping an eye on every part of the city
          and forward.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> The Special Statue – </span>The Hanuman
          murti is very unique over here. It depicts a young Hanuman who is
          sitting on the lap of his mother, Anjani. What makes this one
          special is that it reminds us that Hanuman doesn’t only possess
          strength but also a soft romantic side.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">What People Do There -</span> It is
          customary to give Besan ke Laddoo (confectionery) as prasad to the
          deity here. It’s a busy temple, people shouting out Hanuman Chalisa (a
          holy hymn). Lord Hanuman quickly gained popularity amongst the masses,
          and his worshipers seek strength from him. People worship him for his
          knowledge and power, which provide a check against evil forces. Your
          journey to Lord Rama is said to be unfinished unless you pay a visit
          to the protector Hanuman Garhi.
        </p>

        {/* the Sayru containt */}
        <h2 className="text-3xl font-bold text-amber-800 font-serif mt-12 mb-6">
          Saryu River: The Flow of Salvation
        </h2>
        <p>
          If Ayodhya is the body and Ram Mandir is the heart, then the Saryu
          River flowing here can be called as blood running through the veins.
          The saryu is not water but a living goddess. She’s the mute spectator
          of this epic, right from Lord Rama’s birth till his Jal Samadhi
          (passing into water).
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://images.pexels.com/photos/35216366/pexels-photo-35216366.jpeg"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
        </div>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">Bath in the Saryu River - </span> Bathing
          here is one of the most pious things Hindus can do. It is believed
          that water washes away all the bad things (the sins) we've done in
          past lives, making your soul clean and ready to go into temples. Its
          riverbanks, known as ghats, are a hive of activity where people gather
          to pray, meditate in solitude, and respect their ancestors.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span font-bold>Evening Aarti - </span> After the sunsets, the
          riverside transforms into a spectacle of light and sound in a ceremony
          called Saryu Aarti. Priests, the way they do with the famous
          Ganga Aarti, hold large brass lamps of fire and sway them in rhythmic
          circles as bells jingle and shells blow.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          Thousands of small earth lamps (diyas) are laid afloat on the river to
          carry off the locals' prayers. The reflection of these bright lights
          on the near water is like a carpet of sparkling stars. Sitting on the
          steps of the ghats (such as Ram Ki Paidi) and watching lamps float by,
          with solemn chants in the air, is a calming experience.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> Guptar Ghat -</span> Another significant
          place on the river is Guptar Ghat. According to local belief, it is at
          this holy place that Lord Rama decided to go out of the world. Here,
          he stepped into the waters to make his way back home in heaven
          (Vaikuntha). It is a tranquil, serene place for deep thought, far
          removed from the bustling main city.
        </p>
      </div>
    </div>
  );
};

export default AyodhyaDetail;
