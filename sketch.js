let data;
// let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxIukNpLZUUG3S0-mkUK_K7LmG7kBB95qQi6gRzw2B-IwdSESkcNjrZJ7_gz4DZtzSXRQRRdZ5noT9/pub?gid=0&single=true&output=csv"

let url = "data.csv";

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
    let age = data.getColumn('16-24YearsOld');
    let age2 = data.getColumn('25-34YearsOld');
    let age3 = data.getColumn('35-44YearsOld');
    let age4 = data.getColumn('45-54YearsOld');
    let age5 = data.getColumn('55-64YearsOld');
    let names = data.getColumn('Catagory');

    for (let i = 0; i < numRows; i++){
      let x = 0;
      let y = 100 + i*50; //16-24
      let w = age[i]*5;
      let w1 = age2[i]*5;
      let w2 = age3[i]*5;
      let h = 10;
      let y1 = 110 + i*50; //25-34
      // let y2 = 120 + i*50; //35-44

      fill(255);
      textSize(20);
      text(names[i], x, y - 3);

      rect(x, y, w, h);

      rect(x, y1, w1, h);

      // rect(x, y2, w, h);
    }
  }
}
