

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GeneralEducation from "@/components/homes/general-education";
import OnlineCourses from "@/components/homes/online-courses";
import University from "@/components/homes/university";
import Kindergarten from "@/components/homes/kindergarten";
import LanguageAcademy from "@/components/homes/language-academy";
import CookupAcademy from "@/components/homes/cookup-academy";
import BooksShop from "@/components/homes/books-shop";
import Magazines from "@/components/Magazines"
import Awards from "@/components/Awards/index.tsx"
import MusicPlatform from "@/components/homes/music-platform";
import QuranLearning from "@/components/homes/quran-learning";
import InstructorShowcase from "@/components/homes/instructor-showcase";
import GymTraining from "@/components/homes/gym-training";
import Childcare from "@/components/homes/childcare";
import FashionDesign from "@/components/homes/fashion-design";
import YogaInstructor from "@/components/homes/yoga-instructor";
import OurPhilosophy from "@/components/OurPhilosophy/index"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aboutusv1 from "@/components/inner-pages/about-inner/about-us-v1";
import Aboutusv5 from "@/components/inner-pages/about-inner/about-us-v5";
import Aboutusv4 from "@/components/inner-pages/about-inner/about-us-v4";
import Aboutusv3 from "@/components/inner-pages/about-inner/about-us-v3";
import Aboutusv2 from "@/components/inner-pages/about-inner/about-us-v2";

import Team from "@/components/inner-pages/team-inner/team";
import Career from "@/components/inner-pages/career/career";
import CareerDetails from "@/components/inner-pages/career/career-details";
import EventGrid from "@/components/inner-pages/event/event-grid";
import EventList from "@/components/inner-pages/event/event-list";
import EventDetails from "@/components/inner-pages/event/event-details";
// import TeamDetails from "@/components/inner-pages/team-inner/team-details";
import Price from "@/components/inner-pages/price";
import Faq from "@/components/inner-pages/faq";

import PrivacyPolicy from "@/components/inner-pages/privacy-policy";
import ZoomMetting from "@/components/inner-pages/zoom-metting";
import Signin from "@/components/inner-pages/auth/sign-in";
import Signup from "@/components/inner-pages/auth/sign-up";
import Shop from "@/components/inner-pages/shop/shop";
import ShopList from "@/components/inner-pages/shop/shop-list";
import ShopDetails from "@/components/inner-pages/shop/shop-details";
import Cart from "@/components/inner-pages/shop/cart";
import Checkout from "@/components/inner-pages/shop/checkout";
import Alumni from "@/components/Alumni/index.tsx"

import Coursesv1 from "@/components/inner-pages/courses/courses-v1";
import Coursesv2 from "@/components/inner-pages/courses/courses-v2";
import Coursesv3 from "@/components/inner-pages/courses/courses-v3";
import Coursesv4 from "@/components/inner-pages/courses/courses-v4";
import Coursesv5 from "@/components/inner-pages/courses/courses-v5";
import Coursesv6 from "@/components/inner-pages/courses/courses-v6";
import Coursesv7 from "@/components/inner-pages/courses/courses-v7";
import GalleryPage from "@/components/GalleryPage/index.tsx";
import FeeStructure from "@/components/FeeStructure/index.tsx"
import OurFaculty from "@/components/OurFaculty/index.tsx"
import Academics from "@/components/Academics/index.tsx"
import Coursesv8 from "@/components/inner-pages/courses/courses-v8";
import CoursesListSidebar from "@/components/inner-pages/courses/courses-list-sidebar";
import CoursesOpenFilter from "@/components/inner-pages/courses/courses-open-filter";
import CoursesWithFilter from "@/components/inner-pages/courses/courses-with-filter";
import CoursesGridSidebar from "@/components/inner-pages/courses/courses-grid-sidebar";
import CoursesDetailsv1 from "@/components/inner-pages/courses/courses-details-v1";
import CoursesDetailsv2 from "@/components/inner-pages/courses/courses-details-v2";
import CoursesDetailsv3 from "@/components/inner-pages/courses/courses-details-v3";
import CoursesDetailsv4 from "@/components/inner-pages/courses/courses-details-v4";
import BlogGrid from "@/components/inner-pages/blog/blog-grid";
import BlogSidebar from "@/components/inner-pages/blog/blog-sidebar";
import BlogDetailsLeftSidebar from "@/components/inner-pages/blog/blog-details-left-sidebar";
import BlogDetailsRightSidebar from "@/components/inner-pages/blog/blog-details-right-sidebar";
import BlogDetailsWithoutSidebar from "@/components/inner-pages/blog/blog-details-without-sidebar";
import Contactus from "@/components/contacts/contact-us";
import Contactme from "@/components/contacts/contact-me";
import ErrorPage from "@/components/inner-pages/error";
import MondatoryDisclosure from "@/components/MondatoryDisclosure/index"
import PrinicipalMessage from "@/components/PrincipalMessage/index"

const router = createBrowserRouter([
    { path: "/", element: <University /> },

  { path: "/online-courses", element: <OnlineCourses /> },
  { path: "/education", element:  <GeneralEducation /> },
  { path: "/kindergarten", element: <Kindergarten /> },
    { path: "/fee-structure", element: <FeeStructure /> },
    { path: "/mondatory-public-disclosure", element: <MondatoryDisclosure /> },
    
    { path: "/academics", element: <Academics /> },
    { path: "/magazines", element: <Magazines /> },
    { path: "/our-alumni", element: <Alumni /> },

  { path: "/language-academy", element: <LanguageAcademy /> },
  { path: "/cookup-academy", element: <CookupAcademy /> },
  { path: "/books-shop", element: <BooksShop /> },
  {path : "/gallery" , element : <GalleryPage/>},
  { path: "/music-platform", element: <MusicPlatform /> },
  { path: "/quran-learning", element: <QuranLearning /> },
  { path: "/instructor-showcase", element: <InstructorShowcase /> },
  { path: "/gym-training", element: <GymTraining /> },
  { path: "/childcare", element: <Childcare /> },
  { path: "/fashion-design", element: <FashionDesign /> },
  { path: "/yoga-instructor", element: <YogaInstructor /> },
  { path: "/awards-&-honors", element: <Awards /> },


  { path: "/about-school", element: <Aboutusv1 /> },
  { path: "/about-us-v5", element: <Aboutusv5 /> },
  { path: "/about-us-v4", element: <Aboutusv4 /> },
  { path: "/about-us-v3", element: <Aboutusv3 /> },
  { path: "/about-us-v2", element: <Aboutusv2 /> },

  { path: "/team", element: <Team /> },
  { path: "/career", element: <Career /> },
  { path: "/career-details", element: <CareerDetails /> },
  { path: "/upcoming-event", element: <EventGrid /> },
  { path: "/event-list", element: <EventList /> },
  { path: "/event-details", element: <EventDetails /> },
  { path: "/our-philosophy", element: <OurPhilosophy /> },
  { path: "/prinicipal-message", element: <PrinicipalMessage/> },

  { path: "/our-faculty", element: <OurFaculty /> },
  { path: "/price", element: <Price /> },
  { path: "/faq", element: <Faq /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/zoom-metting", element: <ZoomMetting /> },
  { path: "/sign-in", element: <Signin /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/shop", element: <Shop /> },
  { path: "/shop-list", element: <ShopList /> },
  { path: "/shop-details", element: <ShopDetails /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/courses-v1", element: <Coursesv1 /> },
  { path: "/courses-v2", element: <Coursesv2 /> },
  { path: "/courses-v3", element: <Coursesv3 /> },
  { path: "/courses-v4", element: <Coursesv4 /> },
  { path: "/courses-v5", element: <Coursesv5 /> },
  { path: "/courses-v6", element: <Coursesv6 /> },
  { path: "/courses-v7", element: <Coursesv7 /> },
  { path: "/courses-v8", element: <Coursesv8 /> },
  { path: "/courses-list-sidebar", element: <CoursesListSidebar /> },
  { path: "/courses-open-filter", element: <CoursesOpenFilter /> },
  { path: "/courses-with-filter", element: <CoursesWithFilter /> },
  { path: "/courses-grid-sidebar", element: <CoursesGridSidebar /> },
  { path: "/courses-details-v1", element: <CoursesDetailsv1 /> },
  { path: "/courses-details-v2", element: <CoursesDetailsv2 /> },
  { path: "/courses-details-v3", element: <CoursesDetailsv3 /> },
  { path: "/courses-details-v4", element: <CoursesDetailsv4 /> },
  { path: "/blog-grid", element: <BlogGrid /> },
  { path: "/blog-sidebar", element: <BlogSidebar /> },
  { path: "/blog-details-left-sidebar", element: <BlogDetailsLeftSidebar /> },
  { path: "/blog-details-right-sidebar", element: <BlogDetailsRightSidebar /> },
  { path: "/blog-details-without-sidebar", element: <BlogDetailsWithoutSidebar /> },
  { path: "/contact-us", element: <Contactus /> },
  { path: "/contact-me", element: <Contactme /> },
  { path: "/404", element: <ErrorPage /> },
  { path: "*", element: <ErrorPage /> },
]);


function App() {

  return (

    <RouterProvider router={router} />

  )
}

export default App
