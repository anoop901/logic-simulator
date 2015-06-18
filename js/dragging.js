/**
 * The user needs to be able to drag the logic blocks around
 * Created by anoop on 5/28/15.
 */

/**
 * Sets up user's ability to drag logic blocks around.
 */
Anoop.setupDragging = function () {

    var dragging = false;
    var element = null;
    var offX = 0;
    var offY = 0;

    $('#logic-blocks').on({
        click: function (event) {
            // this is required to prevent the create menu from showing up when dragging blocks
            event.stopPropagation();
            event.preventDefault();
        }
    }, '.logicblock');

    Anoop.setupDragging.startDrag = function (event, blockName) {
        // initiate the drag
        dragging = true;
        element = blockName;
        var target_jq = $(event.target);
        offX = event.pageX - target_jq.offset().left;
        offY = event.pageY - target_jq.offset().top;
        console.log(offX + ', ' + offY);
    };

    $(document).mousemove(function (event) {
        if (dragging) {
            Anoop.logic_blocks[element].x = event.pageX - $('#logic-blocks').offset().left - offX;
            Anoop.logic_blocks[element].y = event.pageY - $('#logic-blocks').offset().top - offY;
            Anoop.updateState();
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
