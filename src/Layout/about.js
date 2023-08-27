import foodImageOne from '../Assets/photo-5.jpg';
import foodImageTwo from '../Assets/photo-3.jpg';
import foodImageThree from '../Assets/photo-4.jpg';
import forkImage from '../Assets/fork-knife.jpg';
import '../styles/style.css';


const about=()=>{

       const contentDiv = document.querySelector('#content');
       contentDiv.replaceChildren();

       //section 3
       const section_three = document.createElement("div");
       section_three.id ="section-3";
   
       const heading3 =document.createElement("h3");
       heading3.id="head3";
       heading3.innerHTML =`We know how to make <br> the best <span>kenyan food</span> in the city`;
   
       const gridImages = document.createElement("div");
       gridImages.id ="grid-images";
   
       const gridImage1 = document.createElement("div");
       const foodOne = new Image();
       foodOne.classList.add("food-images");
       foodOne.id ="food-1";
   
       foodOne.src =foodImageOne;
       gridImage1.appendChild(foodOne);
   
       const gridImage2 = document.createElement("div");
       const foodTwo = new Image();
       foodTwo.classList.add("food-images");
       foodTwo.id ="food-2";
   
       foodTwo.src =foodImageTwo;
       gridImage2.appendChild(foodTwo);
   
       const gridImage3 = document.createElement("div");
       const foodThree = new Image();
       foodThree.classList.add("food-images");
       foodThree.id ="food-3";
   
       foodThree.src =foodImageThree;
       gridImage3.appendChild(foodThree);
   
   
       gridImages.appendChild(gridImage1);
       gridImages.appendChild(gridImage2);
       gridImages.appendChild(gridImage3);
   
   
   
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



       const loadAbout=()=>{
             contentDiv.appendChild(section_three);
             contentDiv.appendChild(section_four);

       }
       
       return{loadAbout};
   
}
export{about};