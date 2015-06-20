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

    // coordinates of create menu, relative to parent
    var location = {x: 0, y: 0};

    // the jQuery object that selects the menu
    var createMenu = $('#create-menu');

    createMenu.menu({items: "> :not(.ui-widget-header)"});

    // hides the menu
    var hideCreateMenu = function() {
        createMenu.hide();
        showingCreateMenu = false;
    };

    // shows the menu
    var showCreateMenu = function(x, y) {
        createMenu.css({left: x, top: y});
        location = {x: x, y: y};
        createMenu.show();
        showingCreateMenu = true;
    };

    // when user clicks one of the <p> elements in the menu, create the appropriate type of element
    createMenu.find('li').click(function(event) {
        // the type of element is found in the "data-logic-block-type" attribute
        // place the element at the location where the create menu was shown
        Anoop.createLogicBlock(
            $(this).data('logic-block-type'), location.x, location.y);
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
