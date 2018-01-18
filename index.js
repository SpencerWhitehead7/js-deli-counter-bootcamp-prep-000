var katzDeli = []

function takeANumber(katzDeli,name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(){
  if (katzDeli === []){
    return "There is nobody waiting to be served!";
  }
  else {
    return katzDeli.shift();
  }
}