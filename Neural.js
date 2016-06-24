var N = require('Neuron');
var nArray = [];
var xs = 10;
var ys = 10;
var zs = 10;
var UEE = require('events').EventEmitter;
var upevent = new UEE();
for(var z = 0; z < zs; z ++){
	for(var y = 0; y < ys; y ++){
		for(var x = 0; x < xs; x ++){
			var p = z*xs*ys + y*ys + x
			nArray[p] = new N(x, y, z);
		}
	}
}
console.log('Neuron count:',nArray.length);
nArray[1].addDendrite(nArray[2]);
nArray[1].addDendrite(nArray[3]);
nArray[1].addDendrite(nArray[4]);
nArray[2].addDendrite(nArray[4]);
nArray[2].addDendrite(nArray[5]);
nArray[2].addDendrite(nArray[6]);
nArray[1].excite();
console.log(process.memoryUsage());
