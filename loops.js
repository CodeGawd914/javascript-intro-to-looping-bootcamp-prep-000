function forLoop(array){
  for( var i = 0; i <25; i++){
    if (i === 1) {
      array.push('I am 1 strange loop.')}
     else { array.push('I am ${i} strange loops.')
   }
  }
   return array
}
function  whileLoop(number){
  while (number>0){console.log(--number)
}
return 'done'
}
function doWhileLoop(array){
<<<<<<< HEAD
  function maybeTrue() {
  return Math.random() >= 0.5}
  do {array.pop()}
  while(array.length > 0 || maybeTrue())
  return array
}
=======
  do {array.pop()}
  while(array.length > 0 || maybeTrue())
}
function maybeTrue() {
  return Math.random() >= 0.5
}
>>>>>>> 2781482029580a9dceef20b9c8fd5bfce63df765
