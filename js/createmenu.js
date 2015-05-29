/**
 * Created by anoop on 5/25/15.
 */

/**
 * Sets up user's ability to show/hide the create menu.
 */
Anoop.setupCreateMenu = function() {

    var showingCreateMenu = false; // boolean: whether the menu is showing right now
    var createMenu = $("#createmenu"); // jQuery object: the menu

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

    // menu is initially hidden
    createMenu.hide();

    // when user clicks one of the <p> elements in the menu, create the appropriate type of element
    $("#createmenu p").click(function(event) {
        // the type of element is found in the "anoop-block-type" attribute
        // place the element at the location where the create menu was shown
        Anoop.createBlock(
            $(this).attr("anoop-block-type"),
            createMenu.css("left"),
            createMenu.css("top"));
    });

    $(document).click(function(event) {
        if (showingCreateMenu) {
            hideCreateMenu();
        } else {
            var clickX = event.pageX - $("#circuit").offset().left;
            var clickY = event.pageY - $("#circuit").offset().top;
            showCreateMenu(clickX, clickY);
        }
    });
}
