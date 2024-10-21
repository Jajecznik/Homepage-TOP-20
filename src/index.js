import './styles.css';
import headerComponent from './components/header';
import mainComponent from './components/main';
import footerComponent from './components/footer';

const cardsData = [
    {
        name: "Recipes",
        repo: "https://github.com/Jajecznik/Recipes-TOP-1",
        page: "https://jajecznik.github.io/Recipes-TOP-1/",
        description: "The website will consist of a main index page which will have links to a few recipes."
    },
    {
        name: "Landing Page",
        repo: "https://github.com/Jajecznik/Landing-Page-TOP-2",
        page: "https://jajecznik.github.io/Landing-Page-TOP-2/",
        description: "This project is about creating an entire web page from a provided design that comes in the form of 2 images."
    },
    {
        name: "Rock Paper Scissors",
        repo: "https://github.com/Jajecznik/Rock-Paper-Scissors-TOP-3",
        page: "https://jajecznik.github.io/Rock-Paper-Scissors-TOP-3/",
        description: "Implementation of grade-school classic “rock paper scissors” where player can play against the computer."
    },
    {
        name: "Etch-a-Sketch",
        repo: "https://github.com/Jajecznik/Etch-a-Sketch-TOP-4",
        page: "https://jajecznik.github.io/Etch-a-Sketch-TOP-4/",
        description: "Creating a browser version of something between a sketchpad and an Etch-A-Sketch."
    },
    {
        name: "Calculator",
        repo: "https://github.com/Jajecznik/Calculator-TOP-5",
        page: "https://jajecznik.github.io/Calculator-TOP-5/",
        description: "Implementation of a simple calculator supporting floating-point numbers and keyboard input."
    },
    {
        name: "Sign-up Form",
        repo: "https://github.com/Jajecznik/Sign-up-Form-TOP-6",
        page: "https://jajecznik.github.io/Sign-up-Form-TOP-6/",
        description: "A simple registration form that prevents entering incorrect data."
    },
    {
        name: "Admin Dashboard",
        repo: "https://github.com/Jajecznik/Admin-Dashboard-TOP-7",
        page: "https://jajecznik.github.io/Admin-Dashboard-TOP-7/",
        description: "Simple admin dashboard built using Flexbox and Grid."
    },
    {
        name: "Library",
        repo: "https://github.com/Jajecznik/Library-TOP-8",
        page: "https://jajecznik.github.io/Library-TOP-8/",
        description: "A simple app imitating a library that allows you to add books and change their reading status."
    },
    {
        name: "Tic Tac Toe",
        repo: "https://github.com/Jajecznik/Tic-Tac-Toe-TOP-9",
        page: "https://jajecznik.github.io/Tic-Tac-Toe-TOP-9/",
        description: "A simple Tic Tac Toe game."
    },
    {
        name: "Restaurant Page",
        repo: "https://github.com/Jajecznik/Restaurant-Page-TOP-10",
        page: "https://jajecznik.github.io/Restaurant-Page-TOP-10/",
        description: "A simple Restaurant Page that is dynamically rendered."
    },
    {
        name: "Todo List",
        repo: "https://github.com/Jajecznik/Todo-List-TOP-11",
        page: "https://jajecznik.github.io/Todo-List-TOP-11/",
        description: "A simple to-do list that allows the user to create, edit or delete projects that may contain tasks. Tasks can also be edited or deleted. The website uses the localStorage, which saves data in the user's browser."
    },
    {
        name: "Weather App",
        repo: "https://github.com/Jajecznik/Weather-App-TOP-12",
        page: "https://jajecznik.github.io/Weather-App-TOP-12/",
        description: "A simple page displaying weather information (current and forecast). When you first enter the website, the weather for the user's current location is loaded. The user can then search for other locations."
    },
    {
        name: "Battleship",
        repo: "https://github.com/Jajecznik/Battleship-TOP-19",
        page: "https://jajecznik.github.io/Battleship-TOP-19/",
        description: "Battleship game in which the player can faight against the computer. The first player to sink all of the opponent's ships wins."
    }
];

document.body.appendChild(headerComponent());
document.body.appendChild(mainComponent(cardsData));
document.body.appendChild(footerComponent());
