var Connection = function(nextNode, condition) {

	this.nextNode = nextNode;
	this.condition = condition;
	this.test = function(x) {
		if(this.condition === undefined) {
			return true;
		} else if (x === condition) {
			return true;
		} else {
			return false;
		}
	}

};

module.exports = Connection;