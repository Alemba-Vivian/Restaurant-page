import HomeBackgroundImge from '../Assets/home/meat-fork.jpg';
import foodImageOne from '../Assets/photo-5.jpg';
import foodImageTwo from '../Assets/photo-3.jpg';
import foodImageThree from '../Assets/photo-4.jpg';
import forkImage from '../Assets/fork-knife.jpg';
import ContentImg from '../Assets/photo-1.JPG';
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



    //section 3
    const section_three = document.createElement("div");
    section_three.id ="section-3";

    const heading3 =document.createElement("h3");
    heading3.innerHTML =`We know how to make <br> the best <span>kenyan food</span> in the city`;

    const gridImages = document.createElement("div");
    gridImages.id ="grid-images";

    const foodOne = new Image();
    foodOne.classList.add("food-images");
    foodOne.id ="food-1";

    foodOne.src =foodImageOne;


    const foodTwo = new Image();
    foodTwo.classList.add("food-images");
    foodTwo.id ="food-2";

    foodTwo.src =foodImageTwo;


    const foodThree = new Image();
    foodThree.classList.add("food-images");
    foodThree.id ="food-3";

    foodThree.src =foodImageThree;


    gridImages.appendChild(foodOne);
    gridImages.appendChild(foodTwo);
    gridImages.appendChild(foodThree);



    section_three.appendChild(heading3);
    section_three.appendChild(gridImages);


    //section 4
    const section_four = document.createElement("div");
    section_four.id ="section-4";

    const content_three = document.createElement("div");
    content_three.id ="content-3"

    const heading4 = document.createElement("h3");
    heading4.innerHTML =`We have been <br> serving our dishes <br> since 2013`;

    const para2 = document.createElement("p");
    para2.id ="para2";
    para2.innerHTML =`Restaurant Alemba elements of traditional kenyan cuisines come <br>
                      together with attention to detail and antique furniture, making it <br>
                      a pleasant and charming place to eat.It's dining room with <br>
                      a fireplace for cold winter evenings and a pergola for warm <br>
                      summer evenings is equally inviting.
                      `;
    
    const para3 = document.createElement("p");
    para3.id ="para3";
    para3.innerHTML =`The Alemba's family has been running this restaurant for 10 years, <br>
                      with Thomas in the kitchen and Mervin in the dining room.`;   
                      
    
    content_three.appendChild(heading4);
    content_three.appendChild(para2);
    content_three.appendChild(para3);



    const content_four = document.createElement("div");
    content_four.id ="content-4";

    const myKnife =new Image();
    myKnife.id ="fork-image";
    myKnife.src =forkImage;


    content_four.appendChild(myKnife);


    
    section_four.appendChild(content_three);
    section_four.appendChild(content_four);




     document.body.querySelector("#content").appendChild(section_one);
     document.body.querySelector("#content").appendChild(section_two);
     document.body.querySelector("#content").appendChild(section_three);
     document.body.querySelector("#content").appendChild(section_four);




    
    




}

export{home};