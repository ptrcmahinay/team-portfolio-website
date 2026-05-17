// object
import p1 from "@/assets/projects/project_1.png";
import p2 from "@/assets/projects/project_2.jpg";
import p3 from "@/assets/projects/project_3.png";

export const NavMenus = [
  {
    label : "Home",
    url : "/",
    key : "home"
  },
  {
    label : "Works",
    url : "/?section=works",
    key : "works"
  },
  {
    label : "About",
    url : "/?section=about",
    key : "about"
  },
  {
    label : "Services",
    url : "/?section=services",
    key : "services"
  },
];

export const ProjectsData = [
  {
    id: 1,
    title: "BeautyBook Booking App",
    description: "A beauty booking app for nails, salon, makeup and many more",
    image: p1,
  },
  {
    id: 2,
    title: "Gmail UI",
    description: "A beauty booking app for nails, salon, makeup and many more",
    image: p2,
  },
  {
    id: 3,
    title: "Redesign Facebook UI",
    description: "A beauty booking app for nails, salon, makeup and many more",
    image: p3,
  },
]