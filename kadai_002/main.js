// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;



// 必要なHTML要素の取得
const typedfield = document.getElementById('typed');
const untypedfield = document.getElementById('untyped');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');
const typedCount = document.getElementById('typed-count');



// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
   'Today is sunny','I love JavaScript!','Good morning',
   'I am Japanese','Let it be','Samurai',
   'Typing Game','Information Technology',
   'I want to be a programmer','What day is today?',
   'I want to build a web app','Nice to meet you',
   'Chrome Firefox Edge Safari','machine learning',
   'Brendan Eich','John Resig','React Vue Angular',
   'Netscape Communications','undefined null NaN',
   'Thank you very much','Google Apple Facebook Amazon',
   'ECMAScript','console.log','for while if switch',
   'var let const','Windows Mac Linux iOS Android',
   'programming'
];

// ランダムテキストの表示
const createText = () =>{
  // 正タイプした文字をクリア
  typed = '';
  typedfield.textContent = typed;
  // console.log(Math.random()*textLists.length);
  // Math.foor()メソッドで切り捨て
  console.log(Math.floor(Math.random() * textLists.length));
  // 配列のインデックス数からランダムな数値を育成する
  let random = Math.floor(Math.random()*textLists.length);
  // 配列textListの０番目を表示
  // untyped = textLists[0];
  // 配列からランダムにテキストを取得し画面に表示する
  untyped = textLists[random];
  // 変数untypedを定数untypedfieldのtextContentプロパティに代入・表示
  untypedfield.textContent = untyped;

};
createText();

// キー入力の判定
const keyPress = e =>{
  // 誤タイプの場合
  if(e.key !== untyped.substring(0,1)){
    wrap.classList.add('mistyped');
    // 100ms後に背景色を元に戻す
    setTimeout(()=> {
      wrap.classList.remove('mistyped');
    },100);
    return;
  }

  // 正タイプの場合
  // スコアインクリメント
  score++;
  wrap.classList.remove('mistyped');
  typed += untyped.substring(0,1);
  // typed = typed+ untyped.susstring(0,1);と同じ意味
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;

  // テキストがなくなったら新しいテキストを表示
  if(untyped ===''){
    createText();
  }

  
};

// タイピングスキルのランク判定
const rankCheck = score => {
  
  // テキストを格納する変数を作る
  let text = '';

  // スコアに応じて異なるメッセージを変数textに格納する
  if(score < 100){
    text = `あなたのランクはCです。\nBランクまであと${100-score}文字です。`;
  }else if(score <200){
    text = `あなたのランクはBです。\nAランクまであと${200-score}文字です。`;
  }else if(score < 300){
    text= `あなたのランクはAです。\nSランクまであと${300-score}文字です。`;
  }else if(score >= 300){
    text =`あなたのランクはSです。`;
  }

  // スコアの値を返す
  return `${score}文字打てました！\n${text}\n[OK]リトライ / [キャンセル]終了`;
  
};

const showTimeup=()=>{
  const timeupMessage = document.getElementById('timeup_message');
    setTimeout(()=>{
        timeupMessage.textContent='タイムアップ！'; 
        typedfield.style.display='none';
        untypedfield.style.display='none';
           
    },10);
  }




// ゲーム終了
const gameOver = id =>{
  clearInterval(id);
  // console.log('ゲーム終了！');
  const result = confirm(rankCheck(score));

  // OKボタンをクリックしたらリロードする
  if(result == true){
    window.location.reload();
  }
};

// カウントダウンタイマー
const timer = () =>{
  // タイマー部分のHTML要素（P要素）を取得する
  let time = count.textContent;
  const id = setInterval(()=>{
    // カウントダウンする
    time--;
    count.textContent = time;

    // カウントが０になったらタイマーを止める
    if(time <= 0){
      // clearInterval(id);
      // setTimeout(()=>{
      showTimeup();
      setTimeout(()=>{
      
      gameOver(id);
     },10);
      
      // timeupMessage.textContent='タイムアップ！';      
    }
  },1000);
};

// ゲームスタートの処理
start.addEventListener('click',() =>{
  // カウントダウンタイマーを開始する
  timer();
  // ランダムなテキストを表示する
  createText();
  // スタートボタンを非表示にする
  start.style.display='none';

  // キーボードのイベント処理
  document.addEventListener('keypress',keyPress);
});

untypedfield.textContent ='スタートボタンで開始';

// タイマーが0になったら「タイムアップ！」の表示をするコードを記述してください
// 表示する場所はconfirmのダイアログではなく、
// タイプする文字が表示される部分（グレーの背景部分）に表示してください。
// 「タイムアップ」を表示するコードは
// setTimeoutを使って実装をしてください。

// 1.カウントダウンが０になった時、表示しているテキストを非表示
// 2."タイムアップ"という文字を表示させる





