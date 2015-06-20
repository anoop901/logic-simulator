/**
 * Created by anoop on 5/28/15.
 */

var Anoop = {
    /**
     * (int) a number used to generate unique keys for blocks
     */
    currentBlockNum: 0,
    /**
     * Array of objects, one for each logic block. Each object has the following attributes:
     *  type (String): the type of logic block
     *  x (String): the x-position of the block, relative to the circuit div
     *  y (String): the y-position of the block, relative to the circuit div
     */
    logic_blocks: {
        'special_and': {
            type: 'and_gate',
            x: 200,
            y: 100
        },
        'special_or': {
            type: 'or_gate',
            x: 100,
            y: 200
        }
    }
};

/**
 * Creates a logic block of the given type.
 * @param blockType (String) the type of logic block to create
 * @param x (String) the x-position of the new block, relative to the circuit div
 * @param y (String) the y-position of the new block, relative to the circuit div
 */
Anoop.createLogicBlock = function(blockType, x, y) {

    Anoop.logic_blocks['block-' + Anoop.currentBlockNum] = {
        type: blockType,
        x: x,
        y: y
    };
    Anoop.currentBlockNum ++;

    if (Anoop.updateState) {
        Anoop.updateState();
    }
};








// wait until all other scripts have executed so that the functions they define can be called
$(document).ready(function() {
    // this is the start of the program flow
    Anoop.setupCreateMenu();
    Anoop.setupDragging();
    Anoop.renderBlocks();
});
