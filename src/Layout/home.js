import HomeBackgroundImge from '../Assets/home/meat-fork.jpg';
import foodImageOne from '../Assets/photo-5.jpg';
import foodImageTwo from '../Assets/photo-3.jpg';
import foodImageThree from '../Assets/photo-4.jpg';
import forkImage from '../Assets/fork-knife.jpg';
import menuBackroundImage from '../Assets/photo-6.jpg';
import IconOne from '../Assets/logo-1.png';
import IconTwo from '../Assets/logo-2.png';
import pastaImageBackground from '../Assets/photo-2.JPG';
import pizzaImageBg from '../Assets/pizza.jpg';
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


    //section 5
    const section_five = document.createElement("div");
    section_five.id ="section-5";

    const heading5 = document.createElement('h3');
    heading5.id ="heading-5";

    heading5.innerHTML =`The selected menu <br>
                         More great meals await you <br>
                         inside the restaurant`;

    
     const content =document.createElement("div");
     content.classList.add("contents");
     
     const content_five = document.createElement("div");
     content_five.id ="content-5";

     const menu_bg =new Image();
     menu_bg.id ="menu_bg";
     menu_bg.src =menuBackroundImage;


     content_five.appendChild(menu_bg);


     const content_six = document.createElement("div");
     content_six.id ="content-6";


     const myIconOne = new Image();
     myIconOne.id ="icon-one";
     myIconOne.src =IconOne;

     const heading6 =document.createElement("h3");
     heading6.id ="heading-6";
     heading6.innerHTML =`DESSERTS`;

     //one
     const heading7 = document.createElement("h4");
     heading7.id ="heading-7";
     heading7.innerHTML =`Bruschetta <span id =desserts>$8.25<span>`;

     const para4 = document.createElement("p");
     para4.id ="para4";
     para4.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                       add pesto $1.00`;

     //two
    const heading8 = document.createElement("h4");
    heading8.id ="heading-8";
    heading8.innerHTML =`Fried Mozarella <span id =desserts>$8.00</span>`;
                  
    const para5 = document.createElement("p");
    para5.id ="para5";
    para5.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                    add pesto $1.00`; 


    //three  
    const heading9 = document.createElement("h4");
    heading9.id ="heading-8";
    heading9.innerHTML =`Antipasto Originalle <span id =desserts>$17.25</span>`;
                  
    const para6 = document.createElement("p");
    para6.id ="para5";
    para6.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                    add pesto $1.00`;  
                    
    //four
    const heading10 = document.createElement("h4");
    heading10.id ="heading-8";
    heading10.innerHTML =`Shrimp Scampi <span id =desserts>$10.50</span>`;
                  
    const para7 = document.createElement("p");
    para7.id ="para5";
    para7.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                    add pesto $1.00`;                 

    //five
    const heading11 = document.createElement("h4");
    heading11.id ="heading-8";
    heading11.innerHTML =`Melanzine Caprese <span id =desserts>$10.50</span>`;
                  
    const para8 = document.createElement("p");
    para8.id ="para5";
    para8.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                    add pesto $1.00`;                 



     //appending children
     content_six.appendChild(myIconOne);
     content_six.appendChild(heading6);
     content_six.appendChild(heading7);
     content_six.appendChild(para4);

     content_six.appendChild(heading8);
     content_six.appendChild(para5);

     content_six.appendChild(heading9);
     content_six.appendChild(para6);

     content_six.appendChild(heading10);
     content_six.appendChild(para7);

     content_six.appendChild(heading11);
     content_six.appendChild(para8);


     content.appendChild(content_five)
     content.appendChild(content_six);


     section_five.appendChild(heading5);
     section_five.appendChild(content); 
                     

     //section 6
     const section_six = document.createElement("div");
     section_six.id ="section-6";

     const salad1 = document.createElement("div");
     salad1.id ="salad1";




     const salad2 = document.createElement("div");
     salad2.id ="salad2";

     const myIconTwo = new Image();
     myIconTwo.id ="icon-two";
     myIconTwo.src =IconTwo;

     const heading12 =document.createElement("h3");
     heading12.id ="heading-6";
     heading12.innerHTML =`SOUPS & SALADS`;



     //one
     const heading13 = document.createElement("h4");
     heading13.id ="heading-7";
     heading13.innerHTML =`Tuescany <span id =desserts>$9.45<span>`;

     const para9 = document.createElement("p");
     para9.id ="para4";
     para9.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                       add pesto $1.00`;


     //two
     const heading14 = document.createElement("h4");
     heading14.id ="heading-7";
     heading14.innerHTML =`Soup of the day <span id =desserts>$6.99<span>`;

     const para10 = document.createElement("p");
     para10.id ="para4";
     para10.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                       add pesto $1.00`;                   


     //three
     const heading15 = document.createElement("h4");
     heading15.id ="heading-7";
     heading15.innerHTML =`Caprese <span id =desserts>$10.50<span>`;

     const para11 = document.createElement("p");
     para11.id ="para4";
     para11.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                       add pesto $1.00`;   
                       
                       

      //four
     const heading16 = document.createElement("h4");
     heading16.id ="heading-7";
     heading16.innerHTML =`Cesare <span id =desserts>$8.45<span>`;

     const para12 = document.createElement("p");
     para12.id ="para4";
     para12.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                       add pesto $1.00`;  
                       
                       
     //five
     const heading17 = document.createElement("h4");
     heading17.id ="heading-7";
     heading17.innerHTML =`Dela Casa <span id =desserts>$8.99<span>`;

     const para13 = document.createElement("p");
     para13.id ="para4";
     para13.innerHTML =`Toasted bread with diced tomatoes, <br>
                       balsamic vinegar, basil and cheese. <br>
                       add pesto $1.00`;                    






     salad2.appendChild(myIconTwo);
     salad2.appendChild(heading12);

     salad2.appendChild(heading13);
     salad2.appendChild(para9);

     salad2.appendChild(heading14);
     salad2.appendChild(para10);

     salad2.appendChild(heading15);
     salad2.appendChild(para11);

     salad2.appendChild(heading16);
     salad2.appendChild(para12);

     salad2.appendChild(heading17);
     salad2.appendChild(para13);




     const salad3 = document.createElement("div");
     salad3.id ="salad3";

     const saladImage = new Image();
     saladImage.id ="saladImage";
     saladImage.src =HomeBackgroundImge;


     
     salad3.appendChild(saladImage)




     section_six.appendChild(salad1);
     section_six.appendChild(salad2);
     section_six.appendChild(salad3);
     

     //section 7
     const section_seven = document.createElement("div");
     section_seven.id ="section-7";

     const pasta1= document.createElement("div");
     pasta1.id="pasta-1";

     const pastaImage = new Image();
     pastaImage.id ="pasta-Image";
     pastaImage.src =pastaImageBackground;


     pasta1.appendChild(pastaImage);





     const pasta2= document.createElement("div");
     pasta2.id="pasta-2";


     const myIconThree = new Image();
     myIconThree.id ="icon-one";
     myIconThree.src =IconOne;

     const heading18 =document.createElement("h3");
     heading18.id ="heading-6";
     heading18.innerHTML =`PASTA`;


     //one
     const heading19 = document.createElement("h4");
     heading19.id ="heading-7";
     heading19.innerHTML =`Bolognese <span id =desserts>$14.45<span>`;

     const para14 = document.createElement("p");
     para14.id ="para4";
     para14.innerHTML =`Homemade meat source`;


      //two
      const heading20 = document.createElement("h4");
      heading20.id ="heading-7";
      heading20.innerHTML =`Carbonara <span id =desserts>$14.50<span>`;
 
      const para15 = document.createElement("p");
      para15.id ="para4";
      para15.innerHTML =`Creamy source with onions, pancetta <br> and egg york`;



      //three
      const heading21 = document.createElement("h4");
      heading21.id ="heading-7";
      heading21.innerHTML =`Patriota <span id =desserts>$15.50<span>`;
 
      const para16 = document.createElement("p");
      para16.id ="para4";
      para16.innerHTML =`Tomatoes, basil, garlic and fresh <br> 
                         mozzarella in white wine source`;



       //four
       const heading22 = document.createElement("h4");
       heading22.id ="heading-7";
       heading22.innerHTML =`Aglio E Olio <span id =desserts>$12.25<span>`;
  
       const para17 = document.createElement("p");
       para17.id ="para4";
       para17.innerHTML =`Garlic, oil & crushed red pepper in a white <br>
                          wine source`;                   



       //five
       const heading23 = document.createElement("h4");
       heading23.id ="heading-7";
       heading23.innerHTML =`Fra Diavolo <span id =desserts>$15.25<span>`;
  
       const para18 = document.createElement("p");
       para18.id ="para4";
       para18.innerHTML =`Choice of pasta with spicy garlic plum <br>
                          tomatoe source`;                   
                    



     //appending children                     

     pasta2.appendChild(myIconThree);
     pasta2.appendChild(heading18);

     pasta2.appendChild(heading19);
     pasta2.appendChild(para14);

     pasta2.appendChild(heading20);
     pasta2.appendChild(para15);

     pasta2.appendChild(heading21);
     pasta2.appendChild(para16);

     pasta2.appendChild(heading22);
     pasta2.appendChild(para17);

     pasta2.appendChild(heading23);
     pasta2.appendChild(para18);



    section_seven.appendChild(pasta1);
    section_seven.appendChild(pasta2); 


    //section 8
    const section_eight =document.createElement("div");
    section_eight.id ="section-8";

    const pizza1 =document.createElement("div");
    pizza1.id ="pizza-1";


    const pizza2 =document.createElement("div");
    pizza2.id ="pizza-2";










    const pizza3 =document.createElement("div");
    pizza3.id ="pizza-3";

    const pizzaImage =new Image();
    pizzaImage.id ="pizzaImage";
    pizzaImage.src =pizzaImageBg;


    const myIconFour = new Image();
    myIconFour.id ="icon-two";
    myIconFour.src =IconTwo;

    const heading24 =document.createElement("h3");
    heading24.id ="heading-24";
    heading24.innerHTML =`PIZZA`;



     //one
     const heading25 = document.createElement("h4");
     heading25.id ="heading-7";
     heading25.innerHTML =`Pepperoni & Basil <span id =desserts>$17.25<span>`;

     const para19 = document.createElement("p");
     para19.id ="para4";
     para19.innerHTML =`Ezzo's Pepperoni, buratta, basil, red source`;   


     //two
     const heading26 = document.createElement("h4");
     heading26.id ="heading-7";
     heading26.innerHTML =`Sausage <span id =desserts>$15.50<span>`;

     const para20 = document.createElement("p");
     para20.id ="para4";
     para20.innerHTML =`Sausage, giardiniera, mozarella basil, <br> red surce`;   


     //three
     const heading27 = document.createElement("h4");
     heading27.id ="heading-7";
     heading27.innerHTML =`Miso Mushroom <span id =desserts>$15.25<span>`;

     const para21 = document.createElement("p");
     para21.id ="para4";
     para21.innerHTML =`Shitake mushrooms, black garlic, miso <br>
                        onions, green onions, mozz`;   


     //four
     const heading28 = document.createElement("h4");
     heading28.id ="heading-7";
     heading28.innerHTML =`Cheese <span id =desserts>$12.25<span>`;

     const para22 = document.createElement("p");
     para22.id ="para4";
     para22.innerHTML =`Burrata, parmezan, basil, <br>
                        red source(vegetarian)`;    
                        
                        
     //five
     const heading29 = document.createElement("h4");
     heading29.id ="heading-7";
     heading29.innerHTML =`Fig & Pig <span id =desserts>$15.25<span>`;

     const para23 = document.createElement("p");
     para23.id ="para4";
     para23.innerHTML =`Caramelized onions, figs, confit pork, <br>
                        good balsamic`;   
                        
        
     const buttonContainer = document.createElement("div");
     buttonContainer.id="btn-book-container";

     const buttonOne = document.createElement("button");
     buttonOne.id ="btn-book-table";
     buttonOne.innerHTML =`BOOK A TABLE`;


     buttonContainer.appendChild(buttonOne);

   

    pizza2.appendChild(myIconFour);
    pizza2.appendChild(heading24);

    pizza2.appendChild(heading25);
    pizza2.appendChild(para19);

    pizza2.appendChild(heading26);
    pizza2.appendChild(para20);

    pizza2.appendChild(heading27);
    pizza2.appendChild(para21);

    pizza2.appendChild(heading28);
    pizza2.appendChild(para22);

    pizza2.appendChild(heading29);
    pizza2.appendChild(para23);

    pizza2.appendChild(buttonContainer);



    pizza3.appendChild(pizzaImage);




    section_eight.appendChild(pizza1);
    section_eight.appendChild(pizza2);
    section_eight.appendChild(pizza3);


    //section 9
    const section_nine =document.createElement("div");
    section_nine.id ="section-9";

    










     //appending the children to the main container

     document.body.querySelector("#content").appendChild(section_one);
     document.body.querySelector("#content").appendChild(section_two);
     document.body.querySelector("#content").appendChild(section_three);
     document.body.querySelector("#content").appendChild(section_four);
     document.body.querySelector("#content").appendChild(section_five);
     document.body.querySelector("#content").appendChild(section_six);
     document.body.querySelector("#content").appendChild(section_seven);
     document.body.querySelector("#content").appendChild(section_eight);




    
    




}

export{home};