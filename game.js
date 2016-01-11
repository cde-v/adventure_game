var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
	this.addNode = function(nodeName, nodeText) {
		if (this.nodes[nodeName]) {
	 		throw Error("Duplicate nodes not allowed");
		} else {
			this.nodes[nodeName] = new Node(nodeName, nodeText);
		}

		if(this.startingPoint === null) {
			this.startingPoint = this.nodes[nodeName];
		}
		return this.nodes[nodeName];
	}
	this.getNode = function(nodeName) {
		return this.nodes[nodeName];
	}
	this.connect = function(nodeName1, nodeName2, condition) {
		var node1 = this.getNode(nodeName1);
		var node2 = this.getNode(nodeName2);

		node1.connect(node1.title, condition);

		}
};

module.exports = Game;


// var a = new Game();
// a.addNode('aa','bb');
// //a.addNode('aa','cccc');
// console.log(a.nodes);

// for(key in a.nodes){
// 	console.log(key);
// }