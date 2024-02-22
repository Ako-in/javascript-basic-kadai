const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 1	for文を使用し、配列に代入されたすべての祝日がコンソールに出力されている

for(i = 0; i< holidays.length; i++){
  console.log(holidays[i]);
}

// 2	while文を使用し、配列に代入されたすべての祝日がコンソールに出力されている
let n = 0;
while(n < holidays.length){
  console.log(holidays[n]);
  n++;
}
  
