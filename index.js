var katzDeli = [];

function currentline(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
var lineNamesandNumbers = [];
for (var i=0; i<line.lenght; i++) {
  lineNamesandNumbers.push(i+1 + '.' + line[i]);
}
console.log("The line is currently:" + lineNamesandNumbers)
return "The line is currently:" + lineNamesandNumbers.join(',');
}
function nowServing(line) {
  if(!line.lenght){
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving" + line.shift();
  }
}
function takeANumber(line,name){
  line.push(name);
  console.log ("Welcome," + name + ". You are number" + line.lenght + "in line.")
}