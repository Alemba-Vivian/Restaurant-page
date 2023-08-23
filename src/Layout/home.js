import HomeBackgroundImge from '../Assets/home/meat-fork.jpg';
import '../styles/style.css';

const home =()=>{

    //section 1
    const section_one = document.createElement("div");
    section_one.id ="section-1";

    const heading1 = document.createElement("h1");
    heading1.id ="header";
    heading1.textContent = `GRILLED NYAMA CHOMA`;

    const homeImage = new Image();
    homeImage.id ="image-one";
    homeImage.src = HomeBackgroundImge;

    section_one.appendChild(heading1)
    section_one.appendChild(homeImage);


    //section two
    const section_two = document.createElement("div");
    section_two.id ="section-2";
   
    const content_one = document.createElement("div");
    content_one.id ="content-1";

    const heading2 = document.createElement("h2");
    heading2.textContent =` True & memorable taste made with love and tradition`;

    const para1 = document.createElement("p");

    para1.textContent =`Traditional Kenyan cuisines rank among the world's best cuisines
                        in terms of the quality of it's products, it's cooking methods and it's
                        balance of nutrients`;


    const ul =document.createElement('ul');
    ul.innerHTML =`
                    <li>Each region of Kenya has developed</li>
                    <li>specific food tastes over</li>
                    <li>the centuries based on the products</li>
                    <li>that were produced there</li>
                  `;
    
     content_one.appendChild(heading2);
     content_one.appendChild(para1);
     content_one.appendChild(ul);

     section_two.appendChild(content_one);



    const content_two = document.createElement("div");
    content_two.id ="content-2";


     document.body.querySelector("#content").appendChild(section_one);
     document.body.querySelector("#content").appendChild(section_two);




    
    




}

export{home};