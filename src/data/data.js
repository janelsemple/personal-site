
export const aboutItem = {
  description: "Welcome to my website. In 2021, due to the Covid-19 pandemic, I transitioned from my job in the service industry to pursue an interest in technology. I obtained a diploma in Information Technology, with a major in software development from SAIT. Currently I am a Junior Software Engineer at TDM Engineering, building robust software to streamline their reporting process. I love to learn about all things tech, and am always looking for new ways to challenge myself."
}

export const experienceItems = {
  experience: [
    {
      workplace: 'TDM Engineering',
      location: 'Airdrie, AB',
      title: 'Junior Software Engineer',
      date: 'October 2023 - Present',
      experience: [
        "Developed a solution for photo processing and PowerPoint creation using Python and Electron, reducing the time spent making reports by 50%.",
        "Engineered a high-performance Redis queue system with protocol " +
        "buffers to enable efficient multi-threading and asynchronous task " +
        "processing, significantly enhancing application scalability while " +
        "improving photo processing time by 100%.",
        " Made use of python-specific libraries such as scikit learn and " +
        "python-pptx, while maintaining a robust and modular user" +
        "interface with React and Typescript.",
       "Implemented a safe development environment using Docker and Docker Compose."
      ]
    },
    {
      workplace: 'Unity Technologies',
      location: 'Calgary, AB',
      title: 'Software Test Technician',
      date: 'Sept 2022 - April 2023',
      experience: [
        "Acting as QA lead, created and implemented a comprehensive test plan for the Until You Fall PSVR2 Port, ensuring the game passed Sony’s intense technical requirements and was delivered on time.",
        "Assisted with research for the improvement of existing QA best practices, and the creation of learning material with the Unity Learn platform to expedite the onboarding of new QA members.",
        "Carried out rigorous manual testing on three projects, writing test cases for each to reach a minimum of 80% manual testing coverage.",
        "Participated in agile teams in all phases of the software development life cycle, from design to deployment."
      ]
    }
  ]
}

export const educationItem = {
  institution: 'Southern Alberta Institute of Technology',
  location: 'Calgary, AB',
  degree: 'Information Technology - Software Development',
  date: '2022 - 2023',
  GPA: '3.9'
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
      link: 'https://github.com/CouloirStudio/verbano'
    },
    {
      title: 'Personal Site',
      description: ["Utilized Gatsby to create a fast and responsive site with React and Javascript.",
        "Created all custom components, with dynamically loaded data.",
        "Implemented a simple, performant, and responsive design with CSS that works well on all devices.",],
      link: 'https://github.com/janelsemple/personal-site'
    }
    ]
}