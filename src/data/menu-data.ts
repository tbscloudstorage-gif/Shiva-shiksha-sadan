

// const home_1 = "/assets/img/menu/home-1.jpg";
// const home_2 = "/assets/img/menu/home-2.jpg";
// const home_3 = "/assets/img/menu/home-3.jpg";
// const home_4 = "/assets/img/menu/home-4.jpg";
// const home_5 = "/assets/img/menu/home-5.jpg";
// const home_6 = "/assets/img/menu/home-6.jpg";

// const home_7 = "/assets/img/menu/home-14.jpg";
// const home_8 = "/assets/img/menu/home-9.jpg";
// const home_9 = "/assets/img/menu/home-8.jpg";
// const home_10 = "/assets/img/menu/home-12.jpg";
// const home_11 = "/assets/img/menu/home-10.jpg";
// const home_12 = "/assets/img/menu/home-11.jpg";
// const home_13 = "/assets/img/menu/home-13.jpg";
// const home_14 = "/assets/img/menu/home-7.jpg";


interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  mega_menu?: boolean;

  sub_menus?: {
    link: string;
    title: string;
    demo_img?: string;
  }[];

  mega_menus?: {
    title: string;
    menus: {
      link: string;
      title: string;
    }[];
  }[];
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    // img_dropdown: true,
    // sub_menus: [
    //         { link: "/", title: "University", demo_img: home_3 },

    //   { link: "/education", title: "General Education", demo_img: home_1 },
    //   { link: "/online-courses", title: "Online Courses", demo_img: home_2 },
    //   { link: "/kindergarten", title: "Kindergarten", demo_img: home_4 },
    //   { link: "/language-academy", title: "Language Academy", demo_img: home_5 },
    //   { link: "/cookup-academy", title: "CookUp Academy", demo_img: home_6 },
    //   { link: "/books-shop", title: "Books Shop", demo_img: home_7 },
    //   { link: "/music-platform", title: "Music Platform", demo_img: home_8 },
    //   { link: "/quran-learning", title: "Quran Learning", demo_img: home_9 },
    //   { link: "/instructor-showcase", title: "Instructor’s Showcase", demo_img: home_10 },
    //   { link: "/gym-training", title: "Gym Training", demo_img: home_11 },
    //   { link: "/childcare", title: "ChildCare Service", demo_img: home_12 },
    //   { link: "/fashion-design", title: "Fashion Designer", demo_img: home_13 },
    //   { link: "/yoga-instructor", title: "Yoga Instructor", demo_img: home_14 },
    //   { link: "#", title: "Coming Soon", demo_img: home_8 },
    // ],
  },

  {
    id: 2,
    title: "About",
    link: "#",
 has_dropdown: true,
   sub_menus: [
      { link: "/about-school", title: "About School" },
          { link: "/prinicipal-message", title: "Principal's Message" },
                    { link: "/our-philosophy", title: "Our Philosophy" },
                              { link: "/our-faculty", title: "Our Faculty" },
          { link: "/awards-&-honors", title: "Awards & Honors" },
                    { link: "/our-alumni", title: "Our Alumni" },



                    { link: "/mondatory-public-disclosure", title: "Mandatory Public Disclosure" },

    ],
    // mega_menus: [
    //   {
    //     title: "About",
    //     menus: [
    //       { link: "/about-us-v1", title: "About School" },
    //       { link: "/about-us-v5", title: "Chairperson's Message" },
    //       { link: "/about-us-v4", title: "Principal's Message" },
    //       { link: "/about-us-v3", title: "Our Faculty" },
    //       { link: "/about-us-v2", title: "Awards & Honors" },
    //     ],
    //   },
      // {
      //   title: "Inner Pages",
      //   menus: [
      //     { link: "/career", title: "Career" },
      //     { link: "/career-details", title: "Career Details" },
      //     { link: "/event-grid", title: "Event Grid" },
      //     { link: "/event-list", title: "Event List" },
      //     { link: "/event-details", title: "Event Details" },
      //     { link: "/team-details", title: "Instructor Details" },
      //   ],
      // },
      // {
      //   title: "Inner Pages",
      //   menus: [
      //     { link: "/price", title: "Price" },
      //     { link: "/faq", title: "Faq" },
      //     { link: "/privacy-policy", title: "Privacy Policy" },
      //     { link: "/404", title: "Error" },
      //     { link: "/zoom-metting", title: "Zoom Metting" },
      //     { link: "/sign-in", title: "Sign In" },
      //   ],
      // },
      // {
      //   title: "Shop Pages",
      //   menus: [
      //     { link: "/shop", title: "Shop" },
      //     { link: "/shop-list", title: "Shop List" },
      //     { link: "/shop-details", title: "Shop Details" },
      //     { link: "/cart", title: "Cart" },
      //     { link: "/checkout", title: "Checkout" },
      //     { link: "/sign-up", title: "Sign Up" },
      //   ],
      // },
    // ],
  },

  {
    id: 3,
    title: "Event",
    link: "#",
     has_dropdown: true,
    sub_menus: [
      { link: "/upcoming-event", title: "Upcoming Event" },
        { link: "/magazines", title: "Magazines" },
      { link: "/contact-me", title: "Media Coverage" },
    ],
    // mega_menu: false,
    // mega_menus: [
    //   {
    //     title: "Course Style",
    //     menus: [
    //       { link: "/courses-v1", title: "Courses Style 01" },
    //       { link: "/courses-v2", title: "Courses Style 02" },
    //       { link: "/courses-v3", title: "Courses Style 03" },
    //       { link: "/courses-v4", title: "Courses Style 04" },
    //     ],
    //   },
    //   {
    //     title: "Course Style",
    //     menus: [
    //       { link: "/courses-v5", title: "Courses Style 05" },
    //       { link: "/courses-v6", title: "Courses Style 06" },
    //       { link: "/courses-v7", title: "Courses Style 07" },
    //       { link: "/courses-v8", title: "Courses Style 08" },
    //     ],
    //   },
    //   {
    //     title: "Course Sidebar",
    //     menus: [
    //       { link: "/courses-list-sidebar", title: "Courses List Sidebar" },
    //       { link: "/courses-open-filter", title: "Courses Open Filter" },
    //       { link: "/courses-with-filter", title: "Courses With Filter" },
    //       { link: "/courses-grid-sidebar", title: "Courses Grid Sidebar" },
    //     ],
    //   },
    //   {
    //     title: "Course Details",
    //     menus: [
    //       { link: "/courses-details-v1", title: "Courses Details 01" },
    //       { link: "/courses-details-v2", title: "Courses Details 02" },
    //       { link: "/courses-details-v3", title: "Courses Details 03" },
    //       { link: "/courses-details-v4", title: "Courses Details 04" },
    //     ],
    //   },
    // ],
  },
{
    id: 4,
    title: "Academics",
    link: "/academics",
    has_dropdown: false,
    sub_menus: [
      { link: "/contact-us", title: "Contact Us" },
      { link: "/contact-me", title: "Contact Me" },
    ],
  },

  {
    id: 5,
    title: "Admission",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/fee-structure", title: "Fee Structure" },
      { link: "/", title: "Transport Facility" },
      { link: "/faq", title: "FAQs" },
      { link: "/", title: "Apply Now" },
    ],
  },
{
id: 6,
title : "Gallery",
link : "/gallery",
has_dropdown : false,
},
  {
    id:7,
    title: "Contact",
    link: "/contact-us",
    has_dropdown: false,
    // sub_menus: [
    //   { link: "/contact-us", title: "Contact Us" },
    //   { link: "/contact-me", title: "Contact Me" },
    // ],
  },
];

export default menu_data;