import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../../config/Path";

const VrindavanDetail = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-green-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/16228306/pexels-photo-16228306.jpeg)",
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-300">
            Vrindavan
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            The Land of Eternal Love
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* INTRO */}
        <p className="text-lg leading-loose text-gray-700">
          Welcome to Braj Bhoomi, a holy tract in India where even a speck of
          dust is supposed to echo the divine lovers’ names, Radha and Krishna.
          In this country is a center called Vrindavan, a town of mysteries
          replete with temples, groves, and the atmosphere of selfless love
          (Bhakti).
        </p>
        <p className="text-lg leading-loose text-gray-700">
          Vrindavan itself is the foundation of this spiritual journey. Its name
          means "forest of Vrinda (Tulsi or Holy Basil)," the favourite plant of
          Lord Krishna.
        </p>
        <p className="text-lg leading-loose text-gray-700">
          This is not a mere destination; in fact, we can call it a place of
          pilgrimage for the soul, where you visit and walk on the same ground
          where Little Lord Krishna played as a child and grew up.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          This is not a mere destination; in fact, we can call it a place of
          pilgrimage for the soul, where you visit and walk on the same ground
          where Little Lord Krishna played as a child and grew up.
        </p>

        {/* IMAGE BREAK */}
        <h2 className="text-2xl font-bold mb-6">Spiritual Significance</h2>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/33151151/pexels-photo-33151151.jpeg"
            alt="Vrindavan Temples"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* SPIRITUAL SIGNIFICANCE */}
        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> The Eternal Abode - </span>Followers of
          Lord Krishna believe Vrindavan is a part of the spiritual world that
          descended to earth. This land is known as nitya-dham (the eternal
          abode) of the fun and loving pastimes (leelas) of Radha and Krishna,
          in contrast to other places, which may appear or disappear..
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">The Energy of Love - </span> Vrindavan's
          dominant mood is of divine love (prema). Here, God, far from being
          looked at as a severe king, is the familiar, attractive friend, son,
          or lover. Millions of pilgrims come here to soak up this love,
          searching for truth in devotion.
        </p>

        <p>
          <span className="font-bold">A Never-ending Festival -</span> The
          entire town throbs with devotional intoxication. People will be
          forever calling you “Radhe Radhe”; they recognize that unfoldment is
          taking place in every man and woman, acknowledging Radha, the divine
          symbol of pure devotion, in each other.
        </p>

        {/* BANKE BIHARI */}
        <h2 className="text-2xl font-bold mb-6">
          Banke Bihari Temple: The Bent Enchanter
        </h2>
        <p>
          Of the thousands of temples, Banke Bihari Temple is at the heart of
          Vrindavan. It is the residence of one of the most popular gods in
          Braj.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.pexels.com/photos/11511275/pexels-photo-11511275.jpeg"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
            alt="Banke Bihari Temple"
          />
          <h2 className="font-bold">The Spiritual Significance</h2>
        </div>

        <p>
          <span className="font-bold"> The "Bent" Form - </span>The name Banke
          Bihari means "the enjoyer who is bent." Krishna is depicted standing
          in the beautiful Tribhanga (bent at three places) posture, which is
          incredibly charming and captivating.
        </p>
        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> A Self-Made Deity -</span> The murti is
          considered as Swayambhu (self-manifested), formed from the heart of
          Swami Haridas when he was incarnated as a saint. This makes the deity
          very personal and spiritually connected to its worshipper.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">Glimpses of Divine Love:</span> One
          special tradition here is to raise and lower a curtain, giving only
          brief glimpses (darshan) of the image. The idol is supposedly so
          potent and enchanting that a prolonged gaze at the deity can render an
          entire devotee unconscious. This playful custom epitomizes the private
          and passionate aspect of divine love.
        </p>
        {/* RADHA RAMAN */}
        <h1 className="text-2xl font-bold mb-6">
          Radha Raman Lal Ji: Pairs Appearances of the Beloved
        </h1>
        <p>
          Another ancient and highly revered religious place is the Radha Raman
          Temple, which has an emotional and divine story attached to it.
        </p>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/12462435/pexels-photo-12462435.jpeg"
            alt="Radha Raman Temple"
            className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition duration-700"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6">The Spiritual Significance</h2>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">The Self-Manifestation Miracle:</span> The
          deity, Radha Raman Lal, appeared miraculously from a sacred stone
          (shaligram shila) when the revered saint Gopal Bhatta Goswami
          intensely desired a three-fold bent form of Krishna to worship.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">God of Love Exchange:</span> Radha Raman,
          which means "lover of Radha." The deity is called Prayojana Vigraha,
          where the Lord directly reciprocates and satisfies the heart's desire
          of the devotee, which at its core is pure love.
        </p>

        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> An Eternal Flame:</span> The cooking fire
          (chulha) burning at the temple residence kitchen has been kept alight
          for over 500 years since the temple was founded. It represents the
          never-ending love and serving of the Lord. Interesting point: here,
          there is no special deity of Radha; she resides in the heart of
          Krishna, showing their relationship is integral.
        </p>

        {/* GOVARDHAN */}
        <h1 className="text-2xl font-bold mb-6">
          Govardhan Parikrama: The Path of Protection
        </h1>
        <p>
          Govardhan Hill near Vrindavan is no ordinary hill; it is worshipped as
          Lord Krishna’s sacred form in a personal sense. The spiritual practice
          of walking around this sacred hill (walking path) is known as
          Govardhan Parikrama.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.pexels.com/photos/11526024/pexels-photo-11526024.jpeg"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
            alt="Govardhan Parikrama"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">The Spiritual Significance</h2>
        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold"> Lord Krishna’s Act of Protection -</span>{" "}
          The Parikrama reminds us of the monumental leela when seven-year-old
          Krishna raised and kept the Govardhan mountain on his little finger
          for a period of seven days. He did so to save all of the people of
          Braj from an arrogant Lord Indra's relentless rain. The lesson had
          been given that protection was all from God, not in any degree from
          demigods.
        </p>
        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">The Sacred Walk -</span> The Parikrama
          route is around 21 km (13 miles) in circumference. Traversing this
          path, which is commonly done without shoes, is an act of great
          devotion, faith, and submission. Each foot rise is thought to bring a
          great deal of spiritual cleansing and an intimate experience with the
          Lord.
        </p>
        <p className="text-lg leading-loose text-gray-700">
          <span className="font-bold">The Hill, as God -</span> Devotees worship
          the hill as Giriraj Maharaj (King of Hills). They feel that as they
          circle the hill, so do they circle Krishna. It is a deep, meditative
          trek accompanied by chants of “Radhe Radhe” and “Jai Giriraj Maharaj.”
        </p>
      </div>
    </div>
  );
};

export default VrindavanDetail;
