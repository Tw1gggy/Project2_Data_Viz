let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxIukNpLZUUG3S0-mkUK_K7LmG7kBB95qQi6gRzw2B-IwdSESkcNjrZJ7_gz4DZtzSXRQRRdZ5noT9/pub?output=csv"

function preload(){
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  if (data) {
    let numRows = data.getRowCount();
    let age = data.getColumn('16 - 24 years old');
    let names = data.getColumn('Catagory');

    for (let i = 0; i < numRows; i++){
      let x = 0;
      let y = 100 + i*50;
      let w = age[i]*5;
      let h = 10;

      fill(255);
      textSize(20);
      text(names[i], x, y - 5);

      rect(x, y, w, h);
    }
  }
}
