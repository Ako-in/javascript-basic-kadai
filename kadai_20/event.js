// #btnを取得し、定数に代入
const addText = document.getElementById('btn');
// クリックされた時にイベント処理を実行
btn.addEventListener('click',()=>{
  // h2要素を新しく作成
  const h2Add = document.createElement('h2');
  // <h2></h2>ができた状態
  h2Add.textContent = 'ボタンをクリックしました';
  // <h2>ボタンをクリックしました</h2> h2タグの中にコメントが入った状態
  const deleteText = document.getElementById('text');
  // 定数に代入
  deleteText.style.display = 'none';
  // コメントを表示しない

  document.body.prepend(h2Add);
  
});
  





