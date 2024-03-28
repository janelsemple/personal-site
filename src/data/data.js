import tango from '../images/tango.jpg'
import BG3 from '../images/BG3.jpg'
import shrimps from '../images/shrimps.jpg'

export const aboutItem = {
  profileImageSrc: '/images/profile.jpg',
  description: " Hello, and welcome to my site! In 2021 I had had enough of serving tables, and decided to go back to school. I have since achieved my diploma in Information Technology with a major in software development from The Southern Alberta Institute of Technology. I am now looking for a job in the IT industry, and I am excited to see where my new career will take me. I love to learn about all things tech, and I am always looking for new ways to challenge myself. I am also constantly listening to music 24/7, check out my current favorite playlist below."
}

export const experienceItems = {
  experience: [
    {
      workplace: 'TDM Engineering',
      location: 'Airdrie, AB',
      title: 'Junior Software Engineer',
      date: 'October 2023 - Present',
      experience: [
        "Developed a solution using Python and Electron to create reports by sorting photos and creating PowerPoint presentations, reducing the time spent making reports by 50%.",
        "Used Websockets and Protocol Buffers to establish communication between Python and Electron components.",
        "Made use of python-specific libraries such as scikit learn and python-pptx while maintaining a robust and modular user interface with React and Typescript.",
        "Implemented a safe development environment using Docker and Docker Compose.",
        "Created a robust logging system using Winston to track user interactions and errors across different processes ."
      ]
    },
    {
      workplace: 'Unity Technologies',
      location: 'Calgary, AB',
      title: 'Software Test Technician',
      date: 'Sept 2022 - April 2023',
      experience: [
        "Acting as QA lead, created and implemented a comprehensive test plan for the Until You Fall PSVR2 Port, ensuring the game passed Sony’s intense technical requirements and was delivered on time.",
        "Assisted with research for the improvement of existing QA best practices and the creation of learning material with the Unity Learn platform to expedite the onboarding of new QA members.",
        "Carried out rigorous manual testing on three projects writing test cases for each to reach a minimum of 80% manual testing coverage.",
        "Participated in agile teams in all phases of the software development life cycle from design to deployment."
      ]
    }
  ]
}

export const hobbiesItems = {
  hobbies: [
    {
      title: 'Aquariums',
      description: 'I have always been fascinated by fish and aquatic plants. I have two tanks at the moment, and enjoy making them for others on occasion. My current creatures are dozens of neocardina shrimp, and a beta fish named Merlin.',
      imageSrc: shrimps
    },
    {
      title: 'Gaming',
      description: "As most software engineers, I enjoy gaming. I play a variety of games, but I have a soft spot for RPGs, specifically The Elder Scrolls. I am currently on my second playthough of Baldur's Gate 3.",
      imageSrc: BG3
    },
  ]
}

export const educationItem = {
  institution: 'Southern Alberta Institute of Technology',
  location: 'Calgary, AB',
  degree: 'Information Technology - Software Development',
  date: '2022 - 2023',
  GPA: '3.9'
}

export const courseWorkItems = {
  courseWork: [
    "Data Structures and Algorithms", "Object Oriented Design and Development", "Web Development",
    "Database Management", "System Analysis and Design", "Operating Systems", "Software Testing",
    "Project Management", "Security"
  ]

}

export const skillsItems = {
  skills: [
    "Git", "AWS S3", "Docker", "Node", "React",
    "Express", "GraphQL", "OpenAI", "Jest",
    "Cypress", "MongoDB", "Protocol Buffers",
    "UML", "Agile", "Electron"
  ]}

export const languagesItems = {
  languages: [
    "Typescript", "Javascript", "Python", "Java",
    "HTML", "CSS", "SCSS", "SQL"
  ]
}

export const projectsItems = {
  projects: [
    {
      title: 'Verbano',
      description: ["Using Node and React implemented end-to-end functionality for audio recording playback and audio transcription with OpenAI using Typescript.",
      "Made use of Express to create REST API for storing retrieving and transcribing audio using AWS S3 MongoDB and Open AI.",
      "Utilized GraphQL for fast and seamless transfer of data.",
      "Assisted with creation of comprehensive requirements and design documentation."],
      link: ''
    },
    {
      title: 'Personal Site',
      description: ["Utilized Gatsby to create a fast and responsive site with React and Javascript.",
        "Created all custom components, with dynamically loaded data.",
        "Implemented a simple, performant, and responsive design with CSS that works well on all devices.",],
      link: ''
    }
    ]
}