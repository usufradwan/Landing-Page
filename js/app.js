///// Global Variable /////
    // Get Element Section From Html
    const section = Array.from(document.querySelectorAll('section'));
    // Get Element ul from Html Contain Atrribute "id='navbar__list'"
    const navbar = document.querySelector('#navbar__list');

///// Function  /////
// Function To Create item List and Link
function listitems(){
    for(sec of section){
        // get Attribute data-nav From section
        const secName = sec.getAttribute('data-nav');
        // get Attribute id From Section
        const secLink = sec.getAttribute('id');
        // Create Element iterm List
        list = document.createElement('li');
        // Create Link inside Element 'li'
        list.innerHTML = '<a class="menu__link" href="#'+ secLink +'">'+ secName +'</a>';
        // Add item List "li" inside ul --  > Contain "id" navbar__list
        navbar.appendChild(list);
    }
}

///// Create Menu List  /////
    listitems();

///// Scroll Smooth && Class Active After Click on List  /////
// Event Click
navbar.addEventListener("click", (e) => {
    e.preventDefault();
    // for loop to get sections
    for(let sect of section){
        /* if condition Check value attribute 'href' for element (a) equal value attribute 'id' for
        element section*/
        if(e.target.getAttribute("href").substring(1) === sect.id){
            // when click on link in navbar Scrooll Smooth To Section Choice 
            sect.scrollIntoView({behavior:'smooth'});
        }
    }
}); 

///// Add Class  /////
// function to add event Scroll
window.addEventListener("scroll", (e) => { 
    /* Add Class 'your-active-class' to Change Background Section and 
    Add Class 'active' to Change Background list in navbar */
    for(let sections of section){
        // get height section
        let  bound = sections.getBoundingClientRect().top;
        // get link a equal id section
        let  alink = document.querySelector('a[href="#'+sections.id+'"]');
        // if Condetion to Add Class
        if(bound >= 0 && bound <= 250){ 
            // Add Class 'your-active-class' To section
            sections.classList.add('your-active-class');
            // Add class 'active' To list in navbar
            alink.classList.add('active');
        } else {
            // Remove Class 'your-active-class' from section
            sections.classList.remove('your-active-class');
            // Remove class 'active' from list in navbar
            alink.classList.remove('active');
        }
    }
});
