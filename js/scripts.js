$(document).ready(function() {

    //------------------------ Submenu transition ------------------------------------


    let parents_of_submenus = $('aside > ul > li > div');
    let arrows = $('aside > ul > li > div > span');
    let submenus = $('aside > ul > li > ul');

    parents_of_submenus.click(function(event) {

        event.preventDefault();

        let current_arrow_index = $(this).parent().index();
        var current_arrow = $(arrows[current_arrow_index]);


        let angle = currentAngle(current_arrow) - 180;
        current_arrow.css('transform', 'rotate(' + angle + 'deg)');

        $(submenus[current_arrow_index]).slideToggle('slow');

    });


    $('button').click(function() {

        alert('Sorry! nothing`s gonna happen 😅');
    });


    //------ A small function --------


    function currentAngle(element) {

        let transform = element.css('transform');
        let values = transform.split('(')[1].split(')')[0].split(',');
        let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));

        return angle;
    }

    // ----------------------  Media Query  -------------------------------------------


    let container = $('div.container');
    let main = $('div.container>main');
    let aside = $('aside');
    let button = $('header button');

    // Create a media query(condition) that targets viewports at least 700px wide.
    //window.matchMedia is an object that keeps the information about the query.
    const mediaQuery = window.matchMedia('(min-width: 700px)');


    // This method is out listner(which is called when the user does something).
    function handleScreenChanges(mq) {

        // Check if the media query is true
        if (mq.matches) {
            //.maches is a property of window.matchMedia object.
            largeSizeScreenQueries();
        } else {
            smallSizeScreenQueries();
        }
    }

    // *Explanation: below the page
    // 'change' is the Event and handleScreenChanges function is the Listener.
    mediaQuery.addEventListener('change', handleScreenChanges);

    // Initial check
    handleScreenChanges(mediaQuery);


    function largeSizeScreenQueries() {

        //container.css({ 'display': 'flex', 'justify-content': 'space-between' });
        container.addClass('container-large-size');

        //main.css('width', 'calc(100% - 250px)');
        main.addClass('main-large-size');

        //aside.css({ 'width': '250px', 'position': 'static', 'display': 'block' });
        aside.addClass('aside-large-size');

        //button.css('display', 'none');
        button.addClass('open-menu-button-large-size');

    }

    function smallSizeScreenQueries() {

        container.removeClass('container-large-size');
        main.removeClass('main-large-size');
        aside.removeClass('aside-large-size');
        button.removeClass('open-menu-button-large-size');

    }

});




//*
// Listen to any changes that happen in the media query(min-width: 700px), if onChane even happened, then implement the function.
//handleScreenChanges is a callback function(as addEventListener needs a callback as its argument). so we don't need to give it any argument as input.
//you could also write directly anonymous function instead. like:
// mediaQuery.addEventListener('change',()=>{
//     // Check if the media query is true
//     if (mq.matches) {
//         largeSizeScreenQueries();
//     } else {
//         smallSizeScreenQueries();
//     }
// });
//But as I needed to call the function for the initial state(to load the page properly in the beginning), I wrote it respectively.