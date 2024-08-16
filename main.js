'use strict';
{

const shuffle = document.getElementById ("shuffle");
const repeat = document.getElementById ("repeat");
const repeat1 = document.getElementById ("repeat-1");
const play= document.getElementById("play");

shuffle.addEventListener('click', () => {
  shuffle.classList.toggle('green');
});

repeat.addEventListener('click', () => {
  if (!repeat.classList.contains('green')) {
    repeat.classList.add('green');
  } else {
    repeat.classList.add('hidden');
    repeat.classList.remove('green');
    repeat1.classList.remove('hidden');
  }
});

repeat1.addEventListener('click', () => {
  repeat1.classList.add('hidden');
  repeat.classList.remove('hidden');
});

play.addEventListener('click', () => {
  play.classList.toggle("bi-play-fill")
  play.classList.toggle("bi-pause-fill")

});
}