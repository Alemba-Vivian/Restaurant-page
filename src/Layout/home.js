import HomeBackgroundImge from '../Assets/home/meat-fork.jpg';
import ContentImg from '../Assets/photo-1.JPG';
import '../styles/style.css';

const home =()=>{
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();
 
 

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
    heading2.innerHTML =` True & memorable <br> taste made with love <br> and tradition`;

    const para1 = document.createElement("p");

    para1.innerHTML =`Traditional Kenyan cuisines ranks <br> among the world's best cuisines <br>
                        in terms of the quality of it's products,<br> it's cooking methods and it's
                        balance <br> of nutrients`;


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

  

    const content_two = document.createElement("div");
    content_two.id ="content-2";

    const contentImage =new Image();
    contentImage.id ="image-two";
    contentImage.src = ContentImg;

    content_two.appendChild(contentImage);


    section_two.appendChild(content_one);
    section_two.appendChild(content_two);



    const loadHome=()=>{
       //appending the children to the main container
     
    contentDiv.appendChild(section_one);
    contentDiv.appendChild(section_two);

   

    }

    return {loadHome};
    
  
}

export{home};