var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
	this.connect = function(nextNode, condition) {
		for(var i = 0; i < this.connections.length ; i++) {
			if (condition === this.connections[i].condition) {
				throw Error("No duplicates");
			}
		}
		var conObj = new Connection(nextNode, condition);
		this.connections.push(conObj);
	}
	this.route = function(condition) {
		for(var i = 0; i < this.connections.length; i++) {
			if(this.connections[i].condition === condition) {
				return this.connections[i].nextNode;
			}
		}
	}
	this.getConnectionStrings = function() {
		return this.connections.map(function(connection) {
			return connection.condition;
		});
	}
	this.hasConnectionCondition = function(targetCondition) {
		for(var i = 0; i < this.connections.length; i++) {
			if(this.connections[i].condition === targetCondition) {
				return true;
			}
		}
		return false;
	}
};




module.exports = Node;

  // var node1 = new Node();
  // var node2 = new Node();

  // node1.connect(node2,"under some circumstance");
  // console.log(node1.route("under some circumstance"));