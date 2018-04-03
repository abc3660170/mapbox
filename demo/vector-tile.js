var VectorTile = require('vector-tile').VectorTile;
var Protobuf = require('pbf');
var zlib = require('zlib');

zlib.gunzip(data, function(err, buffer) {
    var tile = new VectorTile(new Protobuf(buffer));
});