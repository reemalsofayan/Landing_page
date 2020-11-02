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

    sections.forEach(item => {


        let section = document.createElement('li');
        section.className = 'menu__link';
        section.dataset.nav = item.id;

        section.innerText = item.dataset.nav;
        navigation.appendChild(section);


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
            let MakeCurrent = document.querySelector('li[data-nav="' + entry.target.id + '"]');

            console.log(MakeCurrent);
            MakeCurrent.classList.add('current');




        }

    }));


}


function scrollToClick() {
    navigation.addEventListener('click', function(event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });



};



sections.forEach(section => {

    observer.observe(section);
});



scrollToClick();