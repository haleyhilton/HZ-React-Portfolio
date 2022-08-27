import Image from "../../images/landing-screenshot.png"
import Image2 from "../../images/scheduler.png"
import Image3 from "../../images/tester.png"
// import Image4 from "../../images/"


const projectData = [
    {
      id: 1,
      image_url: Image,
      title: "PetConnect",
      description: "PetConnect is a marketplace app to connect dog breeders with clients. People can view seller pages and see ratings based on past user experiences.",
      repo_url: "https://github.com/haleyhilton/P2-Petconnect",
      deployed_url: "https://thepetconnection.herokuapp.com/"
    },
    {
      id: 2,
      image_url: Image2,
      title: "Work Day Scheduler",
      description: "This simple calendar application that allows a user to save and delete events for each hour of the day.",
      repo_url: "https://github.com/haleyhilton/Zito-Work-Day-Scheduler",
      deployed_url: "https://haleyhilton.github.io/Zito-Work-Day-Scheduler/"
    },
    {
      id: 3,
        image_url: Image3,
        title: "Date Night Generator",
        description: "A date night generator utilizing APIs and featuring dynamically updated HTML and CSS.",
        repo_url: "https://github.com/haleyhilton/No-Clue-What-To-Do",
        deployed_url: "https://haleyhilton.github.io/No-Clue-What-To-Do/"
      },
      {
        id: 4,
        image_url: Image2,
        title: "Not Wordle",
        description: "A vanilla Javascript version of NOT Worlde - project created for fun.",
        repo_url: "https://github.com/haleyhilton/Not-Wordle",
        deployed_url: "TBD"
      },
     
];

export default projectData;