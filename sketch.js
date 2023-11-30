let song;
let playButton;
let changeButton;
const songs = [];

function preload() {
  songs.push(loadSound("Bring Me The Horizon - DArkSide (Lyric Video).mp3"));
  songs.push(loadSound("Lord Huron-The Night We Met Official Audio.mp3"));
  songs.push(loadSound("Avengers.mp3"));
  songs.push(loadSound("BarbieGirl.mp3"));
  songs.push(loadSound("DetroitRockCity.mp3"));
  songs.push(loadSound("GOLDENHOURS.mp3"));
  songs.push(loadSound("SayMyName.mp3"));
  songs.push(loadSound("SlippingThroughMyFingers.mp3")); //instrumental only
  songs.push(loadSound("WalkingOnSunshine.mp3"));
  songs.push(loadSound("WonderPets.mp3"));

}

function setup() {
  createCanvas(900, 650);

  // begining amplitude
  amplitude = new p5.Amplitude();

  // load first song
  song = songs[0];

  // buttons
  playButton = createButton("Play");
  playButton.mousePressed(togglePlaying);

  changeButton = createButton("Change Song");
  changeButton.mousePressed(changeSong);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    playButton.html("Pause");
  } else {
    song.pause();
    playButton.html("Play");
  }
}

function changeSong() {
  // Stop the current song
  song.stop();

  // Change the song
  let currentSongIndex = songs.indexOf(song);
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  song = songs[currentSongIndex];

  // Play the new song
  song.play();
}

function draw() {
  background(0);

  // Get the current volume (amplitude) of the song
  let vol = amplitude.getLevel();

  // Map the volume to a range suitable for visual elements
  let diameter = map(vol, 0, 1, 10, 200);

  //square changes shape to size based on music
  fill(16, 64, 176);
  square(width / 2.5, height/ 2.5, diameter, diameter*10);

  //rectangle changing shape to size based on music
  fill(3, 194, 252);
  rect(width / 3, height / 3, diameter, diameter * 10);
  
  // Draw a circle that changes size based on the music volume
  fill(255, 0, 0); // Red color
  ellipse(width / 2, height / 2, diameter, diameter * 10); // Adjusted for better visibility
}