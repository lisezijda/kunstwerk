# kunstwerk i
kleuren= 0

function setup() {
  createCanvas(400, 400); // maakt een canvas van 400 bij 400 pixels 
}
function draw() {
  
  background(250,cos(kleuren)*255,25);
  kleuren+= 0.01// dit zorgt ervoor dat de achtergrond van kleur veranderd.
  
  noStroke();// er zit geen lijn om de vorm van de figuur.
  
  fill(random() * 255);// de kleur van de rondjes word willekeurig gekozen tussen 0-255, dus tusssen wit, grijs en zwart tinten.
  
  ellipse(random()*400, random()*400, 60,60); // er worden rondjes gemaakt, die zich willekeurig  bevinden tussen de groote van het canvas (400 bij 400). de rondjes zijn 60 bij 60
}








