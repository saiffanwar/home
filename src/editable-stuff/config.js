// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#8500a3, #490d7a, #870850, #9b59b6, #de1b1b, #ad4b7c",
  firstName: "Saif",
  middleName: "",
  lastName: "Anwar",
  message: "PhD Candidate | Machine Learning Researcher",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/saiffanwar",
    },
//    {
//      image: "fa-facebook",
//      url: "https://www.facebook.com/hashirshoaeb",
//    },
    {
      image: "fas fa-user-graduate",
      url: "https://scholar.google.com/citations?user=6i6gXAMAAAAJ&hl=en",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/saif-anwar-458b14175/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/saiffanwar/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/saifanwar.png"),
  imageSize: 375,
  message:
    "I am a PhD Candidate in Computer Science at the University of Warwick. My research interests are in Machine Learning and Artificial Intelligence with a current focus in Explainable AI for high risk sectors.",
  resume: require("../editable-stuff/resume.pdf"),
  professionalSite: "https://warwick.ac.uk/fac/sci/dcs/people/u2188448/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects and Publications",
  gitHubUsername: "saiffanwar", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["TGNNExplainer_Ext", "XAI-TGN", "XAIClustering", "CHILLI"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/saifanwar.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/saifanwar.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for a full-time role within Machine Learning and AI. Please feel free to reach out to me if you know of any opportunities, or just to have a chat!",
  email: "anwarsaif99@hotmail.com",
};

const experiences = {
  show: true,
  heading: "Education & Experience",
  data: [
    {
      role: 'MEng Computer Science & Electronics (First Class Honours)',// Here Add Company Name
      companylogo: require('../assets/img/bristol.png'),
      date: 'September 2017 – June 2025',
        role2: 'Quantum Communciations Researcher',
        date2: 'June 2021 – September 2021',
    },
    {
      role: 'PhD Computer Science',// Here Add Company Name
      companylogo: require('../assets/img/warwick.png'),
      date: 'October 2021 – April 2025 (Expected)',
    role2: 'Senior Graduate Teaching Assistant',
    date2: 'October 2021 – March 2025',
    },
    {
      role: 'Machine Learning Researcher',// Here Add Company Name
      companylogo: require('../assets/img/toshiba.png'),
      date: 'February 2020 – September 2021',
    },
  ]
}

const images = {
  show: true,
  src: require('../editable-stuff/saifanwar.png'),
  alt: "saifanwar",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, images };
