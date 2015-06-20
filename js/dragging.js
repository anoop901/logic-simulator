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

    var logic_blocks_jq = $('#logic-blocks');

    logic_blocks_jq.on({
        click: function (event) {
            // this is required to prevent the create menu from showing up when dragging blocks
            event.stopPropagation();
            event.preventDefault();
        }
    }, '.logic-block');

    Anoop.setupDragging.startDrag = function (event, blockName) {
        // initiate the drag
        dragging = true;
        element = blockName;
        offX = event.pageX - (logic_blocks_jq.offset().left + Anoop.logic_blocks[blockName].x);
        offY = event.pageY - (logic_blocks_jq.offset().top + Anoop.logic_blocks[blockName].y);
    };

    $(document).mousemove(function (event) {
        if (dragging) {
            Anoop.logic_blocks[element].x = event.pageX - logic_blocks_jq.offset().left - offX;
            Anoop.logic_blocks[element].y = event.pageY - logic_blocks_jq.offset().top - offY;
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
