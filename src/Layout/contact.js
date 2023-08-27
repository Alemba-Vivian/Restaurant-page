import '../styles/style.css';
import foodImageThree from '../Assets/photo-4.jpg';
import ContentImg from '../Assets/photo-1.JPG';


const contact=()=>{
        const contentDiv = document.querySelector('#content');
        contentDiv.replaceChildren();

        //section 9
        const section_nine =document.createElement("div");
        section_nine.id ="section-9";
    
        const view =document.createElement("div");
        view.id ="view-point";
    
        const sub_content =document.createElement("h3");
        sub_content.id ="sub-content";
        sub_content.innerHTML =`Kenya, Nairobi <br>
                                Westlands,  <br>
                                place to be`;
    
       view.appendChild(sub_content);
       
       section_nine.appendChild(view);
    
       // section 10
       const section_ten = document.createElement("div");
       section_ten.id ="section-10";
    
       const place1 =document.createElement("div");
       place1.id ="place-1";
    
       const placeImage =new Image();
       placeImage.id ="place-image";
       placeImage.src =foodImageThree;
    
       const callMe =document.createElement("p");
       callMe.id ="callMe";
       callMe.innerHTML =`<span>Call Us</span> and book your table for tonight <br>
                           <h4>+254740624619</h4> <br>
                           <small>or send a message on whatsapp</small>`
    
    
       place1.appendChild(placeImage);
       place1.appendChild(callMe);
    
    
    
    
       const place2 =document.createElement("div");
       place2.id ="place-2";
    
       const myHeader = document.createElement("h3");
       myHeader.id ="myheader";
       myHeader.innerHTML =`Our restaurant's space`;
    
       const myPara1 = document.createElement("p");
       myPara1.id ="myPara1";
       myPara1.innerHTML =`Restaurant Alemba was founded in the<br>
                           2013 and initially operated as a small <br>
                           cafe. After various managements, in 2017, it <br>
                           was taken over by it's current owners and <br>
                           managers, Thomas and Mervin.`
    
    
     const myPara2 = document.createElement("p");
     myPara2.id ="myPara2";
     myPara2.innerHTML =`The premises are those of a farmhouse<br>
                         dating back to the 17th century and, still<br>
                         today, with a management strongly linked <br>
                         to kenyan tradition; the restaurant offers <br>
                         picture corners created by exposed <br>
                         beams and a typical fireplace.`
                                            
    
       place2.appendChild(myHeader);
       place2.appendChild(myPara1);
       place2.appendChild(myPara2);
    
    
    
    
    
    
       const place3 =document.createElement("div");
       place3.id ="place-3";
    
       const placeImage2 = new Image();
       placeImage2.id ="placeImage2"
       placeImage2.src = ContentImg;
    
    
    
    
       place3.appendChild(placeImage2);
    
    
       section_ten.appendChild(place1);
       section_ten.appendChild(place2);
       section_ten.appendChild(place3);


         const loadContact =()=>{

        contentDiv.appendChild(section_nine);
        contentDiv.appendChild(section_ten);

       }

       return {loadContact};


     





}

export{contact};