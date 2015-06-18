/**
 * The create menu is the menu where the user can choose what type of logic block to create.
 * Created by anoop on 5/25/15.
 */

/**
 * Sets up user's ability to show/hide the create menu.
 */
Anoop.setupCreateMenu = function() {

    // whether the menu is showing or not
    var showingCreateMenu = false;
    // the jQuery object that selects the menu
    var createMenu = $('#createmenu');

    // hides the menu
    var hideCreateMenu = function() {
        createMenu.fadeOut(200);
        showingCreateMenu = false;
    };

    // shows the menu
    var showCreateMenu = function(x, y) {
        createMenu.css({left: x, top: y});
        createMenu.slideDown(200, 'swing');
        showingCreateMenu = true;
    };

    // when user clicks one of the <p> elements in the menu, create the appropriate type of element
    createMenu.find('p').click(function(event) {
        // the type of element is found in the "data-logic-block-type" attribute
        // place the element at the location where the create menu was shown
        Anoop.createLogicBlock(
            $(this).attr('data-logic-block-type'),
            createMenu.css('left'),
            createMenu.css('top'));
    });

    $(document).click(function(event) {
        if (showingCreateMenu) {
            hideCreateMenu();
        } else {
            var sectionOffset = $('section').offset();
            var clickX = event.pageX - sectionOffset.left;
            var clickY = event.pageY - sectionOffset.top;
            showCreateMenu(clickX, clickY);
        }
    });
};
