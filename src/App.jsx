import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import { PATH } from "./components/config/Path";
import AyodhyaDetail from "./components/OnlinePuja/Temple/AyodhyaDetail";
import VrindavanDetail from "./components/OnlinePuja/Temple/VrindavanDetail";
import BarsanaDetail from "./components/OnlinePuja/Temple/BarsanaDetail";
import ChitrakootDetail from "./components/OnlinePuja/Temple/ChitrakootDetail";
import MaiharDetail from "./components/OnlinePuja/Temple/MaiharDetail";
import VaranasiDetails from "./components/OnlinePuja/Temple/VaransiDetails";
import VindhyachalDetails from "./components/OnlinePuja/Temple/VindhyachalDetails";
import About from "./components/About/About";
import PrayagrajDetails from "./components/OnlinePuja/Temple/PrayagrajDetails";
import Pooja from "./components/Pooja/Pooja";

/* Layout / Common */
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const NotFound = lazy(() => import("./components/NotFound"));

/* Home Page */
const HomePage = lazy(() => import("./components/Home/HomePage"));

/* Brand & Info */
const Brand_Story = lazy(() => import("./components/About/Brand_Story"));
const Mission_Trust_Signals = lazy(() =>
  import("./components/About/Mission_Trust_Signals")
);
const Team_Pandits = lazy(() => import("./components/About/Team_Pandits"));
const App_Features = lazy(() => import("./components/Download/App_Features"));
const QR_Code_Store_Buttons = lazy(() =>
  import("./components/Download/QR_Code_Store_Buttons")
);
const Legal = lazy(() => import("./components/Legal/Legal"));
const Faq = lazy(() => import("./components/FAQ/Faq"));

/* Poojas by Deity */
const Devi_Maa_Pujas = lazy(() =>
  import("./components/OnlinePuja/Deity/Devi_Maa_Pujas")
);
const Lord_Ganesha_Pujas = lazy(() =>
  import("./components/OnlinePuja/Deity/Lord_Ganesha_Pujas")
);
const Lord_Shiva_Pujas = lazy(() =>
  import("./components/OnlinePuja/Deity/Lord_Shiva_Pujas")
);
const Lord_Vishnu_Pujas = lazy(() =>
  import("./components/OnlinePuja/Deity/Lord_Vishnu_Pujas")
);

/* Poojas by Intention / Category */
const Career_Job_Puja = lazy(() =>
  import("./components/OnlinePuja/Intention/Career_Job_Puja")
);
const Health_Protection_Puja = lazy(() =>
  import("./components/OnlinePuja/Intention/Health_Protection_Puja")
);
const Marriage_Relationship_Puja = lazy(() =>
  import("./components/OnlinePuja/Intention/Marriage_Relationship_Puja")
);
const Wealth_Business_Puja = lazy(() =>
  import("./components/OnlinePuja/Intention/Wealth_Business_Puja")
);

/* Daan & Checkout Flow */
const Health_related_Daan = lazy(() =>
  import("./components/Daan/Intention/Health_related_Daan")
);
const Marriage_Relationship_Daan = lazy(() =>
  import("./components/Daan/Intention/Marriage_Relationship_Daan")
);
const Peace__Protection_Daan = lazy(() =>
  import("./components/Daan/Intention/Peace__Protection_Daan")
);
const Wealth_Business_Daan = lazy(() =>
  import("./components/Daan/Intention/Wealth_Business_Daan")
);
const Seva_Daan_Details = lazy(() =>
  import("./components/Daan/Bhet/Seva_Daan_Details")
);
const Checkout = lazy(() => import("./components/Daan/Bhet/Checkout"));
const Checkout_Cart_Summary = lazy(() =>
  import(
    "./components/OnlinePuja/IndividualPujaDetailPages/Checkout_Cart_Summary"
  )
);
const Payment_Confirmation = lazy(() =>
  import("./components/Daan/Bhet/Payment_Confirmation")
);
const Payment_Confirmation_Page = lazy(() =>
  import(
    "./components/OnlinePuja/IndividualPujaDetailPages/Payment_Confirmation_Page"
  )
);
const Intent_Prayer_Note = lazy(() =>
  import("./components/Daan/Bhet/Intent_Prayer_Note")
);
const User_Details_Form = lazy(() =>
  import("./components/OnlinePuja/IndividualPujaDetailPages/User_Details_Form")
);
const Packages_Add_ons = lazy(() =>
  import("./components/OnlinePuja/IndividualPujaDetailPages/Packages_Add_ons")
);
const Date_Time_Selection = lazy(() =>
  import(
    "./components/OnlinePuja/IndividualPujaDetailPages/Date_Time_Selection"
  )
);

/* Temples & City Pages */
const Temples_of_Bharat = lazy(() =>
  import("./components/DharmikGyan/Categories/Temples_of_Bharat")
);
const Ayodhya = lazy(() => import("./components/Daan/Temple/Ayodhya"));
const Kashi = lazy(() => import("./components/Daan/Temple/Kashi"));
const Ujjain = lazy(() => import("./components/Daan/Temple/Ujjain"));
const Ayodhya_Temple_Pujas = lazy(() =>
  import("./components/OnlinePuja/Temple/Ayodhya_Temple_Pujas")
);
const Kashi_Vishwanath_Pujas = lazy(() =>
  import("./components/OnlinePuja/Temple/Kashi_Vishwanath_Pujas")
);
const Ujjain_Temple_Pujas = lazy(() =>
  import("./components/OnlinePuja/Temple/Ujjain_Temple_Pujas")
);
const SpiritualPlaces = lazy(() =>
  import("./components/OnlinePuja/Temple/SpiritualPlaces")
);
const LiveDarshan = lazy(() =>
  import("./components/OnlinePuja/Temple/LiveDarshan")
);
const LiveDarshanDetail = lazy(() =>
  import("./components/OnlinePuja/Temple/LiveDarshanDetail")
);

/* Knowledge / Content */
const Article_Content = lazy(() =>
  import("./components/DharmikGyan/BlogDetails/Article_Content")
);
const Aarti = lazy(() => import("./components/DharmikGyan/Categories/Aarti"));
const Festivals_Vrat = lazy(() =>
  import("./components/DharmikGyan/Categories/Festivals_Vrat")
);
const Mantra_Stotra = lazy(() =>
  import("./components/DharmikGyan/Categories/Mantra_Stotra")
);

/* Rashifal / Horoscopes */
const Daily_Rashifal = lazy(() =>
  import("./components/Rashifal/Indivisualrash/Daily_Rashifal")
);
const Weekly_Rashifal = lazy(() =>
  import("./components/Rashifal/Indivisualrash/Weekly_Rashifal")
);
const Monthly_Rashifal = lazy(() =>
  import("./components/Rashifal/Indivisualrash/Monthly_Rashifal")
);
const Yearly_Rashifal = lazy(() =>
  import("./components/Rashifal/Indivisualrash/Yearly_Rashifal")
);

/* Individual Zodiac Pages */
const Mesh_Aries = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Mesh_Aries")
);
const Vrishabha_Taurus = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Vrishabha_Taurus")
);
const Mithun_Gemini = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Mithun_Gemini")
);
const Kark_Cancer = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Kark_Cancer")
);
const Simha_Leo = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Simha_Leo")
);
const Kanya_Virgo = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Kanya_Virgo")
);
const Tula_Libra = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Tula_Libra")
);
const Vrishchik_Scorpio = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Vrishchik_Scorpio")
);
const Dhanu_Sagittarius = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Dhanu_Sagittarius")
);
const Makar_Capricorn = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Makar_Capricorn")
);
const Kumbh_Aquarius = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Kumbh_Aquarius")
);
const Meen_Pisces = lazy(() =>
  import("./components/Rashifal/RashiListingPage/Meen_Pisces")
);

/* Contact Us */
const ContachUs = lazy(() => import("./components/ContactUs/ContachUs"));

/* Small utility pages */
const NotFoundPage = lazy(() => import("./components/NotFound")); // already imported above (alias)

/* Loading Component */
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

/* Layout component that includes Navbar and renders nested pages */
const Layout = () => (
  <div className="flex flex-col min-h-screen w-full">
    <Navbar />
    <main className="flex-1 w-full">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path={PATH.HOME} element={<Layout />}>
          {/* Home */}
          <Route index element={<HomePage />} />
          {/* Pooja */}
          <Route path={PATH.POOJA.slice(1)} element={<Pooja />} />
          {/* About us */}
          <Route path={PATH.ABOUT_US.slice(1)} element={<About />} />
          <Route
            path={PATH.ABOUT_MISSION.slice(1)}
            element={<Mission_Trust_Signals />}
          />
          <Route path={PATH.ABOUT_TEAM.slice(1)} element={<Team_Pandits />} />

          {/* App & Utilities */}
          <Route path={PATH.FEATURES.slice(1)} element={<App_Features />} />
          <Route
            path={PATH.DOWNLOAD.slice(1)}
            element={<QR_Code_Store_Buttons />}
          />
          <Route path={PATH.FAQ.slice(1)} element={<Faq />} />
          <Route path={PATH.LEGAL.slice(1)} element={<Legal />} />

          {/* Deity Poojas */}
          <Route
            path={PATH.POOJA_DEVI_MAA.slice(1)}
            element={<Devi_Maa_Pujas />}
          />
          <Route
            path={PATH.POOJA_GANESHA.slice(1)}
            element={<Lord_Ganesha_Pujas />}
          />
          <Route
            path={PATH.POOJA_SHIVA.slice(1)}
            element={<Lord_Shiva_Pujas />}
          />
          <Route
            path={PATH.POOJA_VISHNU.slice(1)}
            element={<Lord_Vishnu_Pujas />}
          />

          {/* Intention / Category Poojas */}
          <Route
            path={PATH.POOJA_CAREER_JOB.slice(1)}
            element={<Career_Job_Puja />}
          />
          <Route
            path={PATH.POOJA_HEALTH_PROTECTION.slice(1)}
            element={<Health_Protection_Puja />}
          />
          <Route
            path={PATH.POOJA_MARRIAGE_RELATIONSHIP.slice(1)}
            element={<Marriage_Relationship_Puja />}
          />
          <Route
            path={PATH.POOJA_WEALTH_BUSINESS.slice(1)}
            element={<Wealth_Business_Puja />}
          />

          {/* Daan / Seva flow */}
          <Route path={PATH.DAAN.slice(1)} element={<Seva_Daan_Details />} />
          <Route
            path={PATH.DAAN_HEALTH.slice(1)}
            element={<Health_related_Daan />}
          />
          <Route
            path={PATH.DAAN_MARRIAGE.slice(1)}
            element={<Marriage_Relationship_Daan />}
          />
          <Route
            path={PATH.DAAN_PEACE_PROTECTION.slice(1)}
            element={<Peace__Protection_Daan />}
          />
          <Route
            path={PATH.DAAN_WEALTH_BUSINESS.slice(1)}
            element={<Wealth_Business_Daan />}
          />
          <Route
            path={PATH.DAAN_PACKAGES.slice(1)}
            element={<Packages_Add_ons />}
          />
          <Route path={PATH.CHECKOUT.slice(1)} element={<Checkout />} />
          <Route
            path={PATH.CHECKOUT_SUMMARY.slice(1)}
            element={<Checkout_Cart_Summary />}
          />
          <Route
            path={PATH.CHECKOUT_DATE_TIME.slice(1)}
            element={<Date_Time_Selection />}
          />
          <Route
            path={PATH.CHECKOUT_INTENT.slice(1)}
            element={<Intent_Prayer_Note />}
          />
          <Route
            path={PATH.CHECKOUT_USER_DETAILS.slice(1)}
            element={<User_Details_Form />}
          />
          <Route
            path={PATH.CHECKOUT_PAYMENT_CONFIRMATION.slice(1)}
            element={<Payment_Confirmation_Page />}
          />
          <Route
            path={PATH.PAYMENT_SUCCESS.slice(1)}
            element={<Payment_Confirmation />}
          />

          {/* Temples & Cities */}
          <Route path={PATH.TEMPLES.slice(1)} element={<Temples_of_Bharat />} />
          <Route
            path={PATH.TEMPLES_AYODHYA.slice(1)}
            element={<AyodhyaDetail />}
          />
          <Route
            path={PATH.TEMPLES_AYODHYA_POOJA.slice(1)}
            element={<Ayodhya_Temple_Pujas />}
          />
          <Route path={PATH.TEMPLES_KASHI.slice(1)} element={<Kashi />} />
          <Route
            path={PATH.TEMPLES_KASHI_POOJA.slice(1)}
            element={<Kashi_Vishwanath_Pujas />}
          />
          <Route path={PATH.TEMPLES_UJJAIN.slice(1)} element={<Ujjain />} />
          <Route
            path={PATH.TEMPLES_UJJAIN_POOJA.slice(1)}
            element={<Ujjain_Temple_Pujas />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES.slice(1)}
            element={<SpiritualPlaces />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES_AYODHYA.slice(1)}
            element={<AyodhyaDetail />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES_VRINDAVAN.slice(1)}
            element={<VrindavanDetail />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES_BARSANA.slice(1)}
            element={<BarsanaDetail />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES_CHITRAKOOT.slice(1)}
            element={<ChitrakootDetail />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES_MAIHAR.slice(1)}
            element={<MaiharDetail />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES_VARANASI.slice(1)}
            element={<VaranasiDetails />}
          />
          <Route
            path={PATH.SPIRITUAL_PLACES_VINDHYACHAL.slice(1)}
            element={<VindhyachalDetails />}
          />
          <Route
            path={PATH.TEMPLES_PRAYAGRAJ.slice(1)}
            element={<PrayagrajDetails />}
          />
          <Route path={PATH.LIVE_DARSHAN.slice(1)} element={<LiveDarshan />} />
          <Route
            path={PATH.LIVE_DARSHAN_DETAIL.slice(1)}
            element={<LiveDarshanDetail />}
          />

          {/* Knowledge / Content */}
          <Route path={PATH.ARTICLES.slice(1)} element={<Article_Content />} />
          <Route path={PATH.AARTI.slice(1)} element={<Aarti />} />
          <Route path={PATH.FESTIVALS.slice(1)} element={<Festivals_Vrat />} />
          <Route path={PATH.MANTRAS.slice(1)} element={<Mantra_Stotra />} />

          {/* Rashifal */}
          <Route
            path={PATH.RASHIFAL_DAILY.slice(1)}
            element={<Daily_Rashifal />}
          />
          <Route
            path={PATH.RASHIFAL_WEEKLY.slice(1)}
            element={<Weekly_Rashifal />}
          />
          <Route
            path={PATH.RASHIFAL_MONTHLY.slice(1)}
            element={<Monthly_Rashifal />}
          />
          <Route
            path={PATH.RASHIFAL_YEARLY.slice(1)}
            element={<Yearly_Rashifal />}
          />

          {/* Individual zodiac routes */}
          <Route path={PATH.RASHIFAL_ARIES.slice(1)} element={<Mesh_Aries />} />
          <Route
            path={PATH.RASHIFAL_TAURUS.slice(1)}
            element={<Vrishabha_Taurus />}
          />
          <Route
            path={PATH.RASHIFAL_GEMINI.slice(1)}
            element={<Mithun_Gemini />}
          />

          <Route
            path={PATH.RASHIFAL_CANCER.slice(1)}
            element={<Kark_Cancer />}
          />
          <Route path={PATH.RASHIFAL_LEO.slice(1)} element={<Simha_Leo />} />
          <Route
            path={PATH.RASHIFAL_VIRGO.slice(1)}
            element={<Kanya_Virgo />}
          />
          <Route path={PATH.RASHIFAL_LIBRA.slice(1)} element={<Tula_Libra />} />
          <Route
            path={PATH.RASHIFAL_SCORPIO.slice(1)}
            element={<Vrishchik_Scorpio />}
          />
          <Route
            path={PATH.RASHIFAL_SAGITTARIUS.slice(1)}
            element={<Dhanu_Sagittarius />}
          />
          <Route
            path={PATH.RASHIFAL_CAPRICORN.slice(1)}
            element={<Makar_Capricorn />}
          />
          <Route
            path={PATH.RASHIFAL_AQUARIUS.slice(1)}
            element={<Kumbh_Aquarius />}
          />
          <Route
            path={PATH.RASHIFAL_PISCES.slice(1)}
            element={<Meen_Pisces />}
          />

          {/* Contact Us */}
          <Route path="contactus" element={<ContachUs />} />

          {/* Fallback Not Found inside layout */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Catch-all (if someone navigates outside layout) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
