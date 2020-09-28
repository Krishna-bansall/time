const circle = [new Circle('minutes',

 '#ff0000'), new Circle('seconds',

 '#f37e21')];

function update() {

 ctx.clearRect(0, 0, canvas.width,

  canvas

  .height);

 //clock

 BorderClock(document.getElementById(

   'clock')

  .value);

 //circles

 circle[0].draw(document

  .getElementById(

   'outside').value);

 circle[1].draw(document

  .getElementById(

   'inside').value);

 //text

 TextClock();

 //loop

 window.requestAnimationFrame(

 update);

}

document.body.onload = update;
