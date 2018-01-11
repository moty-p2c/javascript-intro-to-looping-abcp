function forLoop(arr){
  for(let i=0; i<25; i++ ){
    arr.push("I am "+i +" strange loops.")
  }
  return arr
}

function whileLoop(num){
  while (num>0){
    console.log(--num)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr){
  do {
    console.log(arr.length)
    arr.pop()
    console.log(arr.length)
  } while (arr.length>0 && maybeTrue())
  return arr
}