const textInput = document.getElementById("textInput");
const showBtn = document.getElementById("showBtn");
const addBtn = document.getElementById("addBtn");
const bgChangeBtn = document.getElementById("bgChangeBtn");
const displayArea = document.getElementById("displayArea");
const dataTableBody = document.getElementById("dataTableBody");
const rowCountEl = document.getElementById("rowCount");

// 循環させる背景色リスト
const bgColors = ["lightblue", "lightgreen", "lightcoral"];
let bgIndex = -1; // 初期状態（1回目のクリックで0番目の lightblue になる）

// 行数カウントの更新と「表示」ボタンの表示/非表示切り替え
function updateTableState() {
    const count = dataTableBody.rows.length;
    rowCountEl.textContent = count;

  // 3件以上なら「表示」ボタンを非表示、3件未満なら再表示
    if (count >= 3) {
    showBtn.style.display = "none";
    } else {
    showBtn.style.display = "";
    }
}

// 「表示」ボタン
showBtn.addEventListener("click", () => {
    const value = textInput.value.trim();

    if (value === "") {
    alert("入力値が空です。");
    return;
    }

    displayArea.textContent = value;
    displayArea.classList.toggle("highlight");
});

// 「背景色を変更」ボタン
bgChangeBtn.addEventListener("click", () => {
    bgIndex = (bgIndex + 1) % bgColors.length;
    document.body.style.backgroundColor = bgColors[bgIndex];
});

// 「追加」ボタンと行内の「削除」ボタン
addBtn.addEventListener("click", () => {
    const value = textInput.value.trim();
    if (value === "") {
    alert("入力値が空です。");
    return;
    }

    const tr = document.createElement("tr");

    const contentTd = document.createElement("td");
    contentTd.textContent = value;

    const actionTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "削除";

  // 「削除」ボタンの処理
    deleteBtn.addEventListener("click", () => {
    tr.remove();
    updateTableState();
    });

    actionTd.appendChild(deleteBtn);
    tr.appendChild(contentTd);
    tr.appendChild(actionTd);
    dataTableBody.appendChild(tr);

  // 行数が3件を超えたら、古い行（先頭行）から削除する
    while (dataTableBody.rows.length > 3) {
    dataTableBody.deleteRow(0);
    }

    textInput.value = "";
    updateTableState();
});

// ループ表示（コンソールに1から5までのループ回数を出力）
for (let i = 1; i <= 5; i++) {
    console.log(i);
}