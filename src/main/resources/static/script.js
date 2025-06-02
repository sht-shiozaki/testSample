const btn = document.getElementById('changeColorBtn');

btn.addEventListener('click', () => {
  // ランダムな色を生成して背景色を変更
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});
