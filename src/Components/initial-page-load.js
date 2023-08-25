import { home } from "../Layout/home";
import { menu } from "../Layout/menu";
import { contact } from "../Layout/contact";
import { about } from "../Layout/about";
import { headerNavbar } from "../Layout/header";

const startPageLoad=()=>{
    const header =headerNavbar();
    header.loadHeader();

    const myhome = home();
    myhome.loadHome();
    
    // about();
    // menu();
    // contact();
   
    
}

export{startPageLoad};