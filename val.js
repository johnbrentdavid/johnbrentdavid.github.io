document.addEventListener("DOMContentLoaded", function () {
  const sentences = [
    " Hi, I'm Brent!",
    " This is my portfolio.",
    " If you are reading this,",
    " Please answer the question at the end honestly.",
    " But before all of that.",
    " I just want to say",
    " You are a beautiful person inside out",
    " Who has a kind and honest heart",
    " You have an infectous smile",
    " That I haven't seen in a while",
    " I love your dedication",
    " And admire your determination",
    " Wishing you all the best",
    " As I see you're doing your hardest",
    " Yes, Leah para sayo to",
  ];

  let currentIndex = 0;
  let offset = 0;
  const sentenceElement = document.querySelector(".sentence");
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 15;
  const speed = 70;

  const updateSentence = () => {
    sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
  };

  const handleAnimation = () => {
    if (forwards) {
      if (offset >= sentences[currentIndex].length) {
        if (++skipCount === skipDelay) {
          if (currentIndex === sentences.length - 1) {
            clearInterval(animationInterval);
            // Display the heart container
            document.querySelector(".heart").style.display = "block";
            document.querySelector(".prompt").style.display = "block";
          } else {
            forwards = false;
            skipCount = 0;
          }
        }
      }
    } else if (offset === 0) {
      forwards = true;
      currentIndex = (currentIndex + 1) % sentences.length;
    }

    if (skipCount === 0) {
      forwards ? offset++ : offset--;
    }

    updateSentence();
  };

  const animationInterval = setInterval(handleAnimation, speed);
});
