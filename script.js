// 1. 今日の運勢占い
const btn = document.getElementById('uranai-btn');
const result = document.getElementById('uranai-result');

const fortunes = [
  '大吉：プログラミングがスイスイ進む日！',
  '中吉：新しい技術を見つけるチャンス！',
  '小吉：エラーが出ても落ち着けば解決できる！',
  '吉：コツコツ作業すると良い結果が出る日！'
];

btn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  result.textContent = fortunes[randomIndex];
});

// 2. ダークモード切替
const darkBtn = document.getElementById('dark-btn');
darkBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// 3. いいね！カウント
let count = 0;
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

likeBtn.addEventListener('click', function() {
  count++;
  likeCount.textContent = count;
});

// 4. リアルタイム時計
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  circle(mouseX, mouseY, 20);
}
