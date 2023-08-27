import { home } from "../Layout/home";
import { headerNavbar } from "../Layout/header";

const heading = headerNavbar();
heading.loadHeader();

//loading the navigation bar
const startPageLoad =()=>{
    const myhome = home();
    myhome.loadHome();

}



const loadNavigation=(()=>{
   heading.addHome();
   heading.addAbout();
   heading.addMenu();
   heading.addContact();


      
})();


export{startPageLoad};