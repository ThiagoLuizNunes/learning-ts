let message: string = 'Help me Obi-Wan Kenogi, you are my only hop!';
console.log(message);

let episode: number = 0;
episode = episode + 1;

let isEnoughToBeatMF = function (parsecs: number): boolean {
  return parsecs < 12;
}

let distance = 11;
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`);

let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');

function increment(speed: number, inc: number = 1): number {
  return speed + inc;
}

console.log('Increment (5,1)', increment(5,1));
console.log('Increment (5)', increment(5));
