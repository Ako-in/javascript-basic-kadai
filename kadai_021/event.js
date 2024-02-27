const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
  setTimeout(()=>{
    // h2要素を追加
    const h2Add = document.createElement('h2');
    h2Add.textContent = 'ボタンをクリックしました';
    const deteleText = document.getElementById('text');
    deteleText.style.display = 'none';
    document.body.prepend(h2Add);
  },2000);
});