console.log('play');

let playBtn = document.getElementById('playBtn');

playBtn.onclick = function() {
  document.body.classList = 'is-playing';
  console.log('cl');
};