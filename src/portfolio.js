const seo = {
  title: "Daniel's Portfolio",
  description:
    "Graduated in Mathematics and Economics from the University of York. I have worked at the Ministry of Justice as a statistician for one year. I have completed the FMVA (Financial Modelling and Valuation Analyst) certification, allowing me to enhance my skills in PowerBI and Excel. I possess advanced knowledge in front-end development, as well as proficiency in R, SAS, Python, and Java. I am fluent in Spanish, English, and French.",
  og: {
    title: "Daniel Pérez",
    type: "website",
    url: "",
  },
};

// About Page
const about = {
  title: "Daniel Pérez Sanz",
  logo_name: "DanielPerez",
  subTitle:
    "Graduated in Mathematics and Economics from the University of York. I have worked at the Ministry of Justice as a statistician for one year. I have completed the FMVA (Financial Modelling and Valuation Analyst) certification, allowing me to enhance my skills in PowerBI and Excel. I possess advanced knowledge in front-end development, as well as proficiency in R, SAS, Python, and Java. I am fluent in Spanish, English, and French.",
  resumeLink:
    "https://drive.google.com/file/d/1IhPjbNo6whiLu582KmrCynSHF9KNKfPr/view?usp=sharing",
  portfolio_repository: "https://github.com/danielpsnz/perezdaniel_portfolio",
  githubProfile: "https://github.com/danielpsnz",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/danielpsnz",
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/danielpsnz/",
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:danielperezsanz21@gmail.com",
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/danielpsnz",
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/danielpsnz/",
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "Implementing end-to-end scalable solutions for diverse deep learning and statistical applications, ensuring seamless integration into production environments.",
        "Demonstrated proficiency in tackling Computer Vision and Natural Language Processing (NLP) challenges, delivering impactful solutions through innovative approaches and advanced algorithms.",
        "Expertise in conducting sophisticated quantitative modeling to enable dynamic forecasting and intricate time series analysis, empowering organizations with actionable insights for strategic decision-making.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Front-end Development",
      fileName: "FullStackImg",
      skills: [
        "Developing visually captivating and responsive web interfaces using modern frontend frameworks like Angular, Vue.js, and React, ensuring optimal user experiences across various devices and browsers.",
        "Proficiency in HTML5, CSS3, and JavaScript, with a keen eye for design details and user interactions, to create polished and engaging frontend experiences that meet both aesthetic and functional requirements.",
        "Experience in UI/UX design principles and prototyping tools like Sketch or Figma, collaborating closely with designers to translate wireframes and mockups into pixel-perfect frontend implementations.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Proficient in navigating multiple cloud platforms to design and implement scalable solutions tailored to project requirements and client preferences.",
        "Deploying deep learning models on cloud infrastructure to enable seamless integration with mobile devices, optimizing performance and accessibility across various platforms and environments.",
        "Expertise in configuring streaming jobs between databases and servers on leading cloud platforms AWS, facilitating real-time data synchronization and analysis for enhanced decision-making and insights.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "University of York",
      subtitle: "Bachelor of Science in Mathematics and Economics",
      logo_path: "university-of-york-logo.png",
      alt_name: "University of York",
      duration: "2019 - 2023",
      descriptions: [
        "Strong analytical skills to address and solve complex problems, advanced knowledge in economic theories and mathematical tools, as well as effective communication, teamwork, and leadership skills. Experience with Java and C++."
      ],
      website_link: "http://www.york.ac.uk",
    },
    {
      title: "IMF Business School",
      subtitle: "Master in Data Science and Business Analytics",
      logo_path: "IMF_Smart_Education-logo.png",
      alt_name: "IMF Business School",
      duration: "2023 - 2024",
      descriptions: [
        "Proficiency in advanced data analysis, with outstanding skills in statistics, machine learning, data visualization and programming (Python, R)"
      ],
      website_link: "https://www.imf-formacion.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Financial Modelling and Valuation Analyst (FMVA)",
      logo_path: "FMVA-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "FMVA",
      color_code: "#8C151599",
    },
    {
      title: "Front-end Development Bootcamp",
      logo_path: "frontend-developer",
      certificate_link:
        "https://drive.google.com/file/d/1Nwd01ZINNK6TU17NMk6PQFBbeFFU9Shz/view?usp=sharing",
      alt_name: "Frontend development bootcamp",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  sections: [
    {
      title: "Jobs",
      work: true,
      experiences: [
        {
          title: "Statistician",
          company: "Ministry of Justice, HM Government",
          company_url: "https://www.gov.uk/",
          logo_path: "Ministry_of_Justice_logo.png",
          duration: "October 2021 - August 2022",
          location: "London, United Kingdom",
          description: [
            "Headed the migration of prison statistics data from SAS to R with AWS improving the weekly work within the team.",
            "Managed 2+ projects per quarter about the prison population of England and Wales which were awarded 3 times during the year.",
            "Outpaced to develop and analyse 10+ questions from Parliament about prisons population."
          ],
          color: "#0879bf",
        },
        {
          title: "Newspaper Editor",
          company: "The Yorker",
          company_url: "https://www.linkedin.com/company/the-yorker-ltd/about/",
          logo_path: "the-yorker.jpeg",
          duration: "September 2020 - June 2021",
          location: "York, United Kingdom",
          description: [
            "Directed the Science and Technology section of the newspaper while coordinating a team of 5+ people.",
            "Managed to write 3+ articles per week researching science."
          ],
          color: "#9b1578",
        },
      ],
    },
  ],
};

export {
  seo,
  about,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
};