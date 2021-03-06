/**
 * Created by anoop on 5/30/15.
 */

Anoop.renderBlocks = function () {

    var LogicBlock = React.createClass({displayName: 'LogicBlock',

        render: function () {
            return React.createElement("img", {
                src: 'img/logic-blocks/' + this.props.type + '.svg', 
                className: "logic-block", 
                draggable: "false", 
                onMouseDown: this.startDrag, 
                style: {left: this.props.x, top: this.props.y}});
        },

        startDrag: function (event) {
            Anoop.setupDragging.startDrag(event, this.props.name);
        }
    });

    var Blocks = React.createClass({displayName: 'Blocks',

        getInitialState: function () {
            return {logic_blocks: Anoop.logic_blocks};
        },

        componentDidMount: function () {
            var that = this;

            Anoop.updateState = function () {
                that.setState(Anoop.logic_blocks);
            }
        },

        render: function () {
            // for each block in the model, add a LogicBlock to the "nodes" array
            var nodes = [];
            for (var blockName in this.state.logic_blocks) {
                if (this.state.logic_blocks.hasOwnProperty(blockName)) {
                    var block = this.state.logic_blocks[blockName];
                    nodes.push(React.createElement(LogicBlock, {key: blockName, name: blockName, type: block.type, x: block.x, y: block.y}));
                }
            }
            return React.createElement("div", null, nodes);
        }
    });

    React.render(
        React.createElement(Blocks, null),
        $('#logic-blocks').get(0)
    );
};
