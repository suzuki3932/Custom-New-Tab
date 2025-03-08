function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 時刻を2桁表示にする
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  // 時刻を文字列にする
  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  // HTML要素に時刻を表示する
  document.getElementById('current-time').textContent = timeString;
}
updateTime(); // ページ読み込み時に時刻を表示する
setInterval(updateTime, 1000); // 1秒ごとに時刻を更新する
