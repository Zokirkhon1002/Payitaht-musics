let sounds = ["Payitaht","Payitaht2","Payitaht3","Payitaht4","Payitaht5"];

let buttons = document.querySelectorAll(".btn");

sounds.forEach((sound) => {
let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', ()=>{
        stopSong();
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn);
  });

  function stopSong() {
      sounds.forEach(sound =>{
          let song = document.getElementById(sound);
          song.pause();
          song.currentTime = 0;
      })
  }



