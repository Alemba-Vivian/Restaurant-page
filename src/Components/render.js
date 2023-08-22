import Logo from '../Assets/logo-1.png';



let navlinks =["Welcome", "About Us", "Menu", "logo", "Blogs", "Contact Us", "RESERVATION"];

function render(){

    const ul = document.createElement('ul');
    ul.setAttribute('id', "nav-lists");
    var e = ".html";



    for (var i = 0; i < navlinks.length; i++) {
        ul.innerHTML += "<li><a href='" +navlinks[i] + "" + e + "'>" +navlinks[i] + "</a></li>";
          
    }
    return ul;

}  


export {render};