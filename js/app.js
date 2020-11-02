const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */




const LinksMaker = () => {

   

    sections.forEach(section => {


        // create new element to be added to the list
        let element = document.createElement('li');
        // create new anchor to be added to the element
        let a = document.createElement("a");

        a.setAttribute('href', `#${section.id}`);
        a.setAttribute('data-page', section.id);


        a.textContent = section.dataset.nav;
        a.classList.add("menu__link");
        // add the anchor to element list
        element.appendChild(a);
        // add the li to the to the list
        navigation.appendChild(element);


    });

};


LinksMaker();


const options = {

    threshold: 0.7
};




let observer = new IntersectionObserver(navCheck, options);



function navCheck(entries) {

    entries.forEach((entry => {
            // when 0.7 of the section is viewed on the viewport the correspending section on the navbar will be highlighed
        if (entry.intersectionRatio >= 0.7) {


            let CurrentSections = document.querySelectorAll('.current');

            CurrentSections.forEach(
                (section) => section.classList.remove('current'));

            let MakeCurrent = document.querySelector(`.navbar__menu a[href="#${entry.target.id}"]`);

            MakeCurrent.classList.add('current');


        }




    }));


}

sections.forEach(section => {

    observer.observe(section);
});