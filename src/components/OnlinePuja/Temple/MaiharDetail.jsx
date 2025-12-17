import React from "react";

const MaiharDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-100 font-sans scroll-smooth">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden shadow-2xl"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1919487842/photo/goddess-mahagauri-devi-for-the-eighth-navadurga-of-navratri-festival.jpg?b=1&s=612x612&w=0&k=20&c=3nyWAFwHv_k7Ult9U-0TFCqH1wdnhT2qo7-CngMDBcA=)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-amber-900/40"></div>
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#FFA500] hover:border-[#FFA500] border border-white/30 transition-all font-bold tracking-wide shadow-lg cursor-pointer"
        >
          ← Back
        </button>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFA500] drop-shadow-lg font-serif tracking-wide mb-6">
            Maihar
          </h1>
          <p className="text-4xl font-bold text-white">
            The Necklace of the Divine Mother
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="text-lg leading-loose text-gray-800 font-medium font-serif bg-white/60 p-6 rounded-2xl border border-yellow-100 shadow-sm">
          <span className="font-bold text-amber-700 text-xl">Maihar</span> is a
          small town in the Indian state of Madhya Pradesh, but spiritually, it
          is very significant. The name comes from Mai (Mother) and Har
          (Necklace), or “Mother’s Necklace.” It is the location of one of the
          greatest temples of the Divine Feminine: Maa Sharda Mandir. This town
          is the location of one of the most significant and revered temples of
          the Divine Feminine in Central India: the Maa Sharda Mandir. This
          powerful shrine acts as a spiritual magnet, drawing devotees from
          across the globe who seek the grace of the Goddess of Wisdom.
        </p>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-l-8 border-yellow-500 pl-6">
            Maa Sharda Mandir - The Goddess of Wisdom and the Mountain Divine
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            The presiding deity here is Goddess Sharda, an incarnation of
            Goddess Saraswati, the goddess with attributes of learning,
            knowledge, and music. To worship Maa Sharda is a means of getting
            enlightenment and the strength of mind.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-l-8 border-yellow-500 pl-6">
            Shakti Peetha: The Holy Abode of Shakti
          </h2>
          <ul className="list-disc space-y-4 pl-6 text-lg text-gray-800 font-medium marker:text-yellow-500">
            <li>
              The Maihar temple is a shaktipeeth. Mythologically, the body parts
              of the corpse of Sati fell at different places when Lord Shiva was
              grieving over his wife’s corpse. The necklace (or, haar) of Sati
              is also considered to have fallen here and, hence, it is a highly
              revered place for the devotees of the Mother Goddess.
            </li>
            <li>
              <span className="font-bold text-amber-800">
                Mythological Importance:
              </span>{" "}
              According to Hindu mythology, when Lord Shiva was mourning the
              death of his wife, Sati, her body parts fell at several places
              across the Indian subcontinent. Legend has it that Goddess Sati's
              necklace fell at this spot, and hence, it is one of the most
              sacred places for the worshipers of Mother Goddess, symbolizing an
              abode of power (Shakti).
            </li>
            <li>
              <span className="font-bold text-amber-800">
                Pilgrimage Merit:
              </span>{" "}
              Darshan of a Shakti Peetha is considered the holiest act, provides
              extraordinary punya, and favours all supreme desires. The power of
              speech and intellect is particularly related to the Maihar Peetha.
            </li>
          </ul>
        </div>

        <div className="space-y-6 bg-yellow-50/50 p-8 rounded-3xl border border-yellow-200">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
            Location and Ascent
          </h2>
          <ul className="list-disc space-y-4 pl-6 text-lg text-gray-800 font-medium marker:text-yellow-600">
            <li>
              <span className="font-bold text-amber-800">The Holy Climb:</span>{" "}
              Pilgrims typically ascend a challenging set of some 1,001 to 1,063
              steps to make their way to the main shrine. This difficult climb
              is considered by some to be the ultimate of devotion (tapasya or
              penance), representing the arduous effort necessary to achieve God
              consciousness.
            </li>
            <li>
              <span className="font-bold text-amber-800">
                Modern Accessibility:
              </span>{" "}
              Ropeway Service (Cable Car) Also for the aged, handicapped, and
              infirm, an ultra-modern well well-maintained ropeway service is
              available, bringing the Darshan of Mother to all her children. The
              view from the top offers a panoramic vista of the surrounding
              region, enhancing the sense of awe.
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-b-2 border-yellow-200 pb-2 inline-block">
            The Boon of Knowledge and Understanding
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            Followers visit this place to worship the Goddess Sharda and seek
            blessings for wisdom, knowledge, education, learning, and
            expression. She makes up the one to whom honest wishes can be
            addressed, namely, by means of knowledge and reason. Before exams,
            students come here in large numbers and pray, as well as artists and
            musicians, for the kind of skills they want to master. She is seen
            as the grantor of all creative and intellectual endeavours.
          </p>
        </div>

        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-4">
              Legend of Alha and Udal: Eternal Devotion
            </h2>
            <p className="text-lg leading-loose text-gray-800 font-medium">
              The most popular and unique legend of Maihar is about two warrior
              brothers, Alha-udhal. This tale tacks on a touch of mystical
              devotion to the temple’s history.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-800 font-serif">
                Immortal Worshippers
              </h3>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                It is believed that Alha and Udal were the first to visit this
                shrine amidst dense forests on the Trikut mountains. Alha
                meditated for 12 years (tapasya) at a stretch, and the Goddess
                accepted his wish of immortalized living.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-800 font-serif">
                Penance
              </h3>
              <p className="text-lg leading-loose text-gray-800 font-medium">
                It is believed that Alha did 12 years of tapa (meditation) and
                strict penance (worship of the dzi-devi). Satisfied with his
                dedication, the Goddess granted him immortality and turned him
                into her guardian as well as a follower of the shrine.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-l-8 border-yellow-500 pl-6">
            A Daily Miracle: The Living Legend
          </h2>
          <p className="text-lg leading-loose text-gray-800 font-medium">
            The tradition of the village has it that the immortal warrior Alha
            visits this temple every day till today in the various mornings at
            Brahma Mahurat (the sacred early morning hours before sunrise)
            before the official doors of the temple are opened for darshan.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif border-b-2 border-yellow-200 pb-2 inline-block">
            The Rituals
          </h2>
          <ul className="list-disc space-y-4 pl-6 text-lg text-gray-800 font-medium marker:text-yellow-500">
            <li>
              His daily puja for Maa Sharda, along with the shringar (decoration
              ) of her using fresh flowers, contributes beautifully to his
              divine pursuits. Priests, upon opening the temple, often find
              fresh offerings and noticeable signs of use.
            </li>
            <li>
              This enigmatic phenomenon causes the warrior to generate such
              strong emotions among his followers, who hold him in higher regard
              as they think he makes the temple even more mysteriously divine
              and sacred.
            </li>
            <li>
              Maa Sharda Mandir at Maihar is more than mere stones; it is a
              living testimony to the strength of the Goddess, to the holiness
              of an ancient legend, and above all, to the faith that is
              unwavering in those who climb up treacherous stone steps to seek
              her grace, for wisdom or power.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MaiharDetail;
