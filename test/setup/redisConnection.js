var Redis = require('ioredis');

var redis = module.exports = new Redis.Cluster([{
	port: 30001,
	host: '127.0.0.1'
}]);

before(function(done){
  this.redis = redis;
  if(redis.connected) return done();
  else redis.on('ready', done);
});
