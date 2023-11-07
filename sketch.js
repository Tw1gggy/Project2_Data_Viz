let data;

let url = "data.csv";

function preload(){
  const config = {
    type: 'pie',
    data: data,
  };
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  const data = {
    label: [
      'Ages That Play Shooter Games'
    ],
    datasets: [{
      labels: [
        '16 - 24 Years Old',
        '25 - 34 Years Old',
        '35 - 44 Years Old',
        '45 - 54 Years Old',
        '55 - 64 Years Old'
      ],
      data: [66, 64, 56, 43, 32],
      backgroundColor: [
        'rgb(33, 34, 89)',
        'rgb(63, 21, 97)',
        'rgb(77, 18, 45)',
        'rgb(148, 36, 1)',
        'rgb(56, 115, 54)'
      ],
      hoverOffset: 4
    }]
  };
  createCanvas(500, 500);
}

function draw() {
  background(0);

  if (data) {
    let numRows = data.getRowCount();
    let age = data.getColumn('16-24YearsOld');
    let age2 = data.getColumn('25-34YearsOld');
    let names = data.getColumn('Catagory');

    for (let i = 0; i < numRows; i++){
      let x = 0;
      let y = 100 + i*50; //16-24
      let w = age[i]*5;
      let w1 = age2[i]*5;
      let h = 10;
      let y1 = 110 + i*50; //25-34
  

      fill(255);
      textSize(20);
      text(names[i], x, y - 4.5);

      fill(80, 41, 97);
      rect(x, y, w, h);

      fill(49, 47, 168);
      rect(x, y1, w1, h);

    }
  }
}
