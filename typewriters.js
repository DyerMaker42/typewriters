const sentence = "hello darkness my old friend";
let time = 50;
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, time += 150)
};
setTimeout(()=> {
  console.log('')
},6000)