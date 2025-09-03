function resetQuestionTimer() {
  questionSeconds = 0;
  updateTimerBar();
}

function updateTimerBar() {
  const maxTime = 30; // 30 seconds per question
  const width = (1 - questionSeconds / maxTime) * 100;

  // Smooth color transition using HSL
  // Hue 120° (green) → 0° (red)
  const hue = Math.max(0, 120 - (questionSeconds / maxTime) * 120);
  const color = `hsl(${hue}, 100%, 50%)`;

  const fill = document.getElementById('timerBarFill');
  fill.style.width = `${width}%`;
  fill.style.background = color;
  fill.style.transition = "background 0.5s linear, width 1s linear"; // smooth animation

  if (questionSeconds >= maxTime) {
    nextQuestion(); // Auto-move to next question
  }
}
