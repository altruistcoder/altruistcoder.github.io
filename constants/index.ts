import Digivision from "../public/assets/Digivision.jpeg"
import Zephyr from "../public/assets/Zephyr.png"
import Shortish from "../public/assets/Shortish.png"
import udemy from "../public/assets/udemy.svg"
import javascript from "../public/assets/javascriptCourse.jpg"

const projects = [
  {
    name: "Digivision",
    description: "A deep learning based application which is entitled to help the visually impaired people. The application automatically generates the textual description of what's happening in front of the camera and conveys it to person through audio. It is capable of recognising faces and tell user whether a known person is present in front of him or not.",
    tags: [
      {
        name: "Python",
        color: "#006359",
      },
      {
        name: "OpenCV",
        color: "#ccb291",
      },
      {
        name: "Machine Learning",
        color: "#ccaebc",
      },
    ],
    image: Digivision,
    source_code_link: "https://github.com/altruistcoder/Digivision",
  },
  {
    name: "Zephyr",
    description:
      "Zephyr is a platform which provides users with the predicted AQI levels of air pollution for 39 cities of India with daily, monthly and yearly trends. It also provides some of the statistics observed for AQI over these cities and various latest articles and blogs related to air pollution.",
    tags: [
      {
        name: "django",
        color: "green",
      },
      {
        name: "deep learning",
        color: "#aeae4b",
      },
      {
        name: "Neural network",
        color: "#e36722",
      },
    ],
    image: Zephyr,
    source_code_link: "https://github.com/altruistcoder/Zephyr",
  },
  {
    name: "URL Shortener",
    description:
      "Shortish - a URL shortening webapp which gives you a choice to make custom URLs.",
    tags: [
      {
        name: "django",
        color: "#ccb291",
      },
      {
        name: "python",
        color: "#2398a4",
      },
      {
        name: "HTML",
        color: "#ccaebc",
      },
    ],
    image: Shortish,
    source_code_link: "https://github.com/altruistcoder/URL_Shortener",
  },
  {
    name: "Digit Recognition",
    description:
      "Digit Recognizer is a simple Django application which can be used to recognize handwritten digits.",
    tags: [
      {
        name: "Tensorflow",
        color: "#5c1dcc",
      },
      {
        name: "Deep Learning",
        color: "#8b7975",
      },
      {
        name: "Numpy",
        color: "#114d56",
      },
    ],
    image: "",
    source_code_link: "https://github.com/altruistcoder/digit-recognition",
  },
  {
    name: "Django Blog",
    description:
      "Flappy Bird is a game where you tap the screen to make the bird fly. It is a game in which the player controls the bird Faby, which moves persistently to the right",
    tags: [
      {
        name: "Django",
        color: "#5c1dcc",
      },
      {
        name: "Python",
        color: "#8b7975",
      },
      {
        name: "Bootstrap",
        color: "#114d56",
      },
    ],
    image: "",
    source_code_link: "https://github.com/altruistcoder/django-blog",
  },
  {
    name: "IFSC Detailer",
    description:
      "IFSC Detailer is a webapp which can be used to find some of the details of any bank by entering the corresponding IFSC Code.",
    tags: [
      {
        name: "Python",
        color: "#5c1dcc",
      },
      {
        name: "Django",
        color: "#8b7975",
      },
      {
        name: "HTML",
        color: "#114d56",
      },
    ],
    image: "",
    source_code_link: "https://github.com/altruistcoder/IFSC_Detailer",
  },
];

const testimonials = [
  {
    name: "Javascript",
    designation: "Issued",
    company: "Udemy",
    image: udemy,
    url: "https://udemy.com",
    course: javascript,
  },
  {
    name: "Data Structures & Algorithms",
    designation: "Issued",
    company: "Udemy",
    image: udemy,
    url: "https://udemy.com",
    course: javascript,
  },
  {
    name: "Development with NodeJS, Express and MongoDB",
    designation: "Issued",
    company: "Coursera",
    image: udemy,
    url: "https://coursera.org",
    course: javascript,
  },
];

export { projects, testimonials };
