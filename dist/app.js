var message = 'Help me Obi-Wan Kenogi, you are my only hop!';
console.log(message);
var episode = 0;
episode = episode + 1;
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function increment(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log('Increment (5,1)', increment(5, 1));
console.log('Increment (5)', increment(5));
