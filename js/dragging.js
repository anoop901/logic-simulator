/**
 * The user needs to be able to drag the blocks around
 * Created by anoop on 5/28/15.
 */

/**
 * Sets up user's ability to drag blocks around.
 */
Anoop.setupDragging = function () {

    var dragging = false;
    var element = null;
    var offX = 0;
    var offY = 0;

    $('section').on({
        mousedown: function (event) {
            // initiate the drag
            dragging = true;
            element = this;
            offX = event.pageX - $(this).offset().left;
            offY = event.pageY - $(this).offset().top;

            event.stopPropagation();
            event.preventDefault();
        },
        click: function (event) {
            event.stopPropagation();
            event.preventDefault();
        }
    }, '.gate');


    $(document).mousemove(function (event) {
        if (dragging) {
            $(element).offset({
                "left": (event.pageX - offX),
                "top": (event.pageY - offY)
            });
        }
    });

    $(document).mouseup(function (event) {
        if (dragging) {
            dragging = false;
        }
    });

    $(document).contextmenu(function (event) {
        event.preventDefault();
    });
};
