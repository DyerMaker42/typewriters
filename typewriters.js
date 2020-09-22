const sentence = "hello darkeness my old friend";

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000)
};