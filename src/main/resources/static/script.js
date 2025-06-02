const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange']; // 追加
const btn = document.getElementById('changeColorBtn');
const currentColorText = document.getElementById('currentColor'); // 追加

btn.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  currentColorText.textContent = `現在の色: ${randomColor}`; // 追加
});

// 下記追加
const resetBtn = document.getElementById('resetColorBtn');
resetBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
  currentColorText.textContent = '現在の色: white';
});
