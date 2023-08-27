import IconOne from '../Assets/logo-1.png';
import { home } from './home';
import { about } from './about';
import { menu } from './menu';
import { contact } from './contact';


const headerNavbar =()=>{

    const section =document.createElement("div");
    section.id ="section";

    const buttonHome = document.createElement("button");
    buttonHome.id ="btn-home";
    buttonHome.classList.add("btn");
    buttonHome.innerHTML =`HOME`;
    section.appendChild(buttonHome);

    const addHome =()=>{
          buttonHome.addEventListener('click', ()=>{
            console.log("I am at home");
            const myHome =home();
           myHome.loadHome();

        
         });

    }

    const buttonAbout = document.createElement("button");
    buttonAbout.id ="btn-About";
    buttonAbout.classList.add("btn");
    buttonAbout.innerHTML =`ABOUT US`;
    section.appendChild(buttonAbout);


    const addAbout=()=>{
        buttonAbout.addEventListener('click', ()=>{
        const about_us = about();
        about_us.loadAbout();
         });

    }

   

    const logo = new Image();
    logo.id ="myLogo";
    logo.src =IconOne;
    section.appendChild(logo);


    const buttonMenu = document.createElement("button");
    buttonMenu.id ="btn-Menu";
    buttonMenu.classList.add("btn");
    buttonMenu.innerHTML = `MENU`;
    section.appendChild(buttonMenu);


    const addMenu =()=>{
        buttonMenu.addEventListener('click', ()=>{
        const myMenu = menu();
        myMenu.loadMenu();
        });

    }

 

    const buttonContact = document.createElement("button");
    buttonContact.id ="btn-Contact";
    buttonContact.classList.add("btn");
    buttonContact.innerHTML = `CONTACT`;
    section.appendChild(buttonContact);


    const addContact=()=>{
        buttonContact.addEventListener('click', ()=>{
        const myContact =contact();
        myContact.loadContact();
        });

     }

 

    const loadHeader=()=>{
       
        document.body.querySelector("#header").appendChild(section);       

       }


    return{loadHeader, addHome, addAbout, addMenu, addContact};

}

export{headerNavbar};