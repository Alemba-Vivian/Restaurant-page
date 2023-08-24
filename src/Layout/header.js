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

    buttonHome.addEventListener('click', ()=>{
        home();
    });
    

   

    const buttonAbout = document.createElement("button");
    buttonAbout.id ="btn-About";
    buttonAbout.classList.add("btn");
    buttonAbout.innerHTML =`ABOUT US`;
    section.appendChild(buttonAbout);

    buttonAbout.addEventListener('click', ()=>{
        about();
    })

    const logo = new Image();
    logo.id ="myLogo";
    logo.src =IconOne;
    section.appendChild(logo);


    const buttonMenu = document.createElement("button");
    buttonMenu.id ="btn-Menu";
    buttonMenu.classList.add("btn");
    buttonMenu.innerHTML = `MENU`;
    section.appendChild(buttonMenu);

    buttonMenu.addEventListener('click', ()=>{
        menu();
    })

    const buttonContact = document.createElement("button");
    buttonContact.id ="btn-Contact";
    buttonContact.classList.add("btn");
    buttonContact.innerHTML = `CONTACT`;
    section.appendChild(buttonContact);

    buttonContact.addEventListener('click', ()=>{
        contact();
    })


  

    document.body.querySelector("#content").appendChild(section);



}

export{headerNavbar};