/**
 * Created by anoop on 5/28/15.
 */

var Anoop = {};

/**
 * Creates a block of the given type.
 * @param blockType (String) the type of block to create
 * @param x (number) the x-position of the new block, relative to the circuit div
 */
Anoop.createBlock = function(blockType, x, y) {
    var block = $('<img src="img/blocks/' + blockType + '.svg" class="gate" draggable="false"></img>');
    block.css({
        left: x,
        top: y
    })
    $("#circuit").append(block)
}









// wait until all other scripts have executed so that the functions they define can be called
$(document).ready(function() {
    // this is the start of the program flow
    Anoop.setupDragging();
    Anoop.setupCreateMenu();
});
