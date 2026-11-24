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
const darkBtn = document.getElementById('dark-btn');
darkBtn.addEventListener('click', function() {
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
});

