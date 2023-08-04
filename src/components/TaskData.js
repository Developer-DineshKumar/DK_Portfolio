import img1 from "../assets/foodmunch.png";
import img2 from "../assets/Todo-app.png";
import img3 from "../assets/Jobby-app.png";
import img4 from "../assets/Bookhub.png";
import img5 from "../assets/nxttrendz.jpg";

const ProjectCardData = [
  {
    imgsrc: img1,
    title: "Food Munch",
    text: "Developed a responsive website for Food Store where users can see a list of food items, detailed informationabout a food item, offers.  ● Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach. ● Implemented product youtube videos by using bootstrap embed and model components. Technologies used: HTML, CSS, Bootstrap",
    view: "https://anytimefm.ccbp.tech/",
  },
  {
    imgsrc: img2,
    title: "Todo appllication",
    text: "Developed persistent todo application with CRUD operations to track list of tasks. ● Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap. ● Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations. ● Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on page reloads using local storage methods. Technologies used: HTML, CSS, JS, Bootstrap.",
    view: "https://todoscreator.ccbp.tech/",
  },
  {
    imgsrc: img3,
    title: "Jobby App",
    text: "Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters basedon Salary range and Employment type, etc ● Implemented different pages like Login, Home, Jobs, Job item details using React components, props,state, lists, event handlers, form inputs. ● Authenticating by taking username, password and doing login post HTTP API Call. ● Persisted user login state by keeping jwt token in client storage, Sending it in headers of further APIcalls to authorize the user. ● Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link. ● Implemented filters and search text by sending them as query parameters to jobs API calls. ● Redirecting to the login page if the user tries to open Home, Jobs, Job item details routes which need authentication by implementing protected Route. Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication, User name : rahul and password: rahul@2021",
    view: "https://getjob.ccbp.tech/",
    source: "https://github.com/Developer-DineshKumar/Jobby-App",
  },
  {
    imgsrc: img4,
    title: "Book Hub",
    text: "Implemented a Book Hub app that fetches data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website. Technologies used: React.js, User name : raja and password: raja@2021",
    view: "https://dkbookhub.ccbp.tech/",
    source: "https://github.com/Developer-DineshKumar/Book-Hub-",
  },
  {
    imgsrc: img5,
    title: "Nxt-Trendz",
    text: "Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart. ● Designed pages for Login, Products, and Product details with React Router and React components. ● Ensured user security through JWT tokens, REST API calls, and local storage. Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication",
    view: "https://newnxttrendz.ccbp.tech/",
    source:
      "https://github.com/Developer-DineshKumar/Nxt-Trendz---Cart-Features",
  },
];

export default ProjectCardData;
