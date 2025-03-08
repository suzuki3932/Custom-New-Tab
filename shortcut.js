// ショートカット情報を取得
function getShortcuts() {
  const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
  return shortcuts;
}

// ショートカット情報を保存
function saveShortcuts(shortcuts) {
  localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
}

// ショートカットを表示
function displayShortcuts() {
  const shortcuts = getShortcuts();
  const shortcutList = document.getElementById('shortcut-list');
  shortcutList.innerHTML = ''; // リストをクリア

  shortcuts.forEach((shortcut, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="${shortcut.url}" target="_blank">${shortcut.name}</a>
      <button onclick="removeShortcut(${index})">削除</button>
    `;
    shortcutList.appendChild(listItem);
  });
}

// ショートカットを追加
function addShortcut() {
  const nameInput = document.getElementById('shortcut-name');
  const urlInput = document.getElementById('shortcut-url');
  const name = nameInput.value;
  const url = urlInput.value;

  if (name && url) {
    const shortcuts = getShortcuts();
    shortcuts.push({ name, url });
    saveShortcuts(shortcuts);
    displayShortcuts();
    nameInput.value = '';
    urlInput.value = '';
  }
}

// ショートカットを削除
function removeShortcut(index) {
  const shortcuts = getShortcuts();
  shortcuts.splice(index, 1);
  saveShortcuts(shortcuts);
  displayShortcuts();
}
