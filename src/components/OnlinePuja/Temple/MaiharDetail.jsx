import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

const MaiharDetail = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-orange-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1919487842/photo/goddess-mahagauri-devi-for-the-eighth-navadurga-of-navratri-festival.jpg?b=1&s=612x612&w=0&k=20&c=3nyWAFwHv_k7Ult9U-0TFCqH1wdnhT2qo7-CngMDBcA=)",
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
            Maihar: The Necklace of the Divine Mother
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="text-lg leading-loose text-gray-700">
          Maihar is a small town in the Indian state of Madhya Pradesh, but
          spiritually, it is very significant. The name comes from Mai (Mother)
          and Har (Necklace), or “Mother’s Necklace.” It is the location of one
          of the greatest temples of the Divine Feminine: Maa Sharda Mandir.
          This town is the location of one of the most significant and revered
          temples of the Divine Feminine in Central India: the Maa Sharda
          Mandir. This powerful shrine acts as a spiritual magnet, drawing
          devotees from across the globe who seek the grace of the Goddess of
          Wisdom.
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          Maa Sharda Mandir - The Goddess of Wisdom and the Mountain Divine
        </h1>
        <p className="text-lg leading-loose text-gray-700">
          The presiding deity here is Goddess Sharda, an incarnation of Goddess
          Saraswati, the goddess with attributes of learning, knowledge, and
          music. To worship Maa Sharda is a means of getting enlightenment and
          the strength of mind.
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          Shakti Peetha: The Holy Abode of Shakti
        </h1>
        <ul className="list-disc space-y-4">
          <li>
            The Maihar temple is a shaktipeeth. Mythologically, the body parts
            of the corpse of Sati fell at different places when Lord Shiva was
            grieving over his wife’s corpse. The necklace (or, haar) of Sati is
            also considered to have fallen here and, hence, it is a highly
            revered place for the devotees of the Mother Goddess.
          </li>
          <li>
            Mythological Importance: According to Hindu mythology, when Lord
            Shiva was mourning the death of his wife, Sati, her body parts fell
            at several places across the Indian subcontinent. Legend has it that
            Goddess Sati's necklace fell at this spot, and hence, it is one of
            the most sacred places for the worshipers of Mother Goddess,
            symbolizing an abode of power (Shakti).
          </li>
          <li>
            Pilgrimage Merit: Darshan of a Shakti Peetha is considered the
            holiest act, provides extraordinary punya, and favours all supreme
            desires. The power of speech and intellect is particularly related
            to the Maihar Peetha.
          </li>
        </ul>

        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          Location and Ascent
        </h1>
        <ul className="list-disc space-y-4">
          <li>
            The Holy Climb: Pilgrims typically ascend a challenging set of some
            1,001 to 1,063 steps to make their way to the main shrine. This
            difficult climb is considered by some to be the ultimate of devotion
            (tapasya or penance), representing the arduous effort necessary
            to achieve God consciousness.
          </li>
          <li>
            Modern Accessibility: Ropeway Service (Cable Car) Also for the aged,
            handicapped, and infirm, an ultra-modern well well-maintained
            ropeway service is available, bringing the Darshan of Mother to all
            her children. The view from the top offers a panoramic vista of the
            surrounding region, enhancing the sense of awe.
          </li>
        </ul>

        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          The Boon of Knowledge and Understanding
        </h1>
        <p>
          Followers visit this place to worship the Goddess Sharda and seek
          blessings for wisdom, knowledge, education, learning, and expression.
          She makes up the one to whom honest wishes can be addressed, namely,
          by means of knowledge and reason. Before exams, students come here in
          large numbers and pray, as well as artists and musicians, for the kind
          of skills they want to master. She is seen as the grantor of all
          creative and intellectual endeavours.
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          Legend of Alha and Udal: Eternal Devotion
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          The most popular and unique legend of Maihar is about two warrior
          brothers, Alha-udhal. This tale tacks on a touch of mystical devotion
          to the temple’s history.
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          Immortal Worshippers
        </h2>
        <p>
          It is believed that Alha and Udal were the first to visit this shrine
          amidst dense forests on the Trikut mountains. Alha meditated for 12
          years (tapasya) at a stretch, and the Goddess accepted his wish
          of immortalized living.
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          Penance
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          {" "}
          It is believed that Alha did 12 years of tapa (meditation) and
          strict penance (worship of the dzi-devi). Satisfied with his
          dedication, the Goddess granted him immortality and turned him into
          her guardian as well as a follower of the shrine.
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          A Daily Miracle: The Living Legend
        </h2>
        <p className="text-lg leading-loose text-gray-700">
          The tradition of the village has it that the immortal warrior Alha
          visits this temple every day till today in the various mornings at
          Brahma Mahurat (the sacred early morning hours before sunrise) before
          the official doors of the temple are opened for darshan.
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold text-amber-300">
          The Rituals
        </h2>
        <ul className="list-disc space-y-4">
          <li>
            His daily puja for Maa Sharda, along with the shringar (decoration )
            of her using fresh flowers, contributes beautifully to his divine
            pursuits. Priests, upon opening the temple, often find fresh
            offerings and noticeable signs of use.
          </li>
          <li>
            This enigmatic phenomenon causes the warrior to generate such strong
            emotions among his followers, who hold him in higher regard as they
            think he makes the temple even more mysteriously divine and sacred.
          </li>
          <li>
            Maa Sharda Mandir at Maihar is more than mere stones; it is a living
            testimony to the strength of the Goddess, to the holiness of an
            ancient legend, and above all, to the faith that is unwavering in
            those who climb up treacherous stone steps to seek her grace, for
            wisdom or power.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MaiharDetail;
