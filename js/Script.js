//const sounds = ["beer_can_opening","bell_ring", "button_click", "cd_tray", "tag", "door_bell", "computer_error","pop_cork","metal_plate","water_droplet","staple_gun","glass"];
var songList = [{
    "value": "beer_can_opening",
    "src": "sounds/beer_can_opening.mp3"
}, {
    "value": "bell_ring",
    "src": "sounds/bell_ring.mp3"
}, {
    "value": "button_click",
    "src": "sounds/button_click.mp3"
}
, {
    "value": "cd_tray",
    "src": "sounds/cd_tray.mp3"
}
, {
    "value": "tag",
    "src": "sounds/tap.mp3"
}, {
    "value": "door_bell",
    "src": "sounds/door_bell.mp3"
}, {
    "value": "computer_error",
    "src": "sounds/computer_error.mp3"
}
, {
    "value": "pop_cork",
    "src": "sounds/pop_cork.mp3"
}, {
    "value": "metal_plate",
    "data": "451"
}, {
    "value": "water_droplet",
    "src": "sounds/water_droplet.mp3"
}
, {
    "value": "staple_gun",
    "src": "sounds/staple_gun.mp3"
}
, {
    "value": "glass",
    "src": "sounds/glass.mp3"
}
];



songList.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound.value.toUpperCase();;

  btn.addEventListener("click", () => {
    stopSongs(sound);

    document.getElementById(sound.value).play();
  });



  document.getElementById("buttons").appendChild(btn);
});

function stopSongs(sound) {

    const song = document.getElementById(sound.value);
    song.pause();
    song.currentTime = 0;
  }



function sort_function(){
document.getElementById("buttons").innerHTML="";
let sortedArray= songList.sort(function(a, b) {
    var textA = a.value;
    var textB = b.value;
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
sortedArray.forEach((sound) => {

  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound.value.toUpperCase();;

  btn.addEventListener("click", () => {
    stopSongs(sound);

    document.getElementById(sound.value).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
}



function myFunction() {
document.getElementById("buttons").innerHTML="";
var result = [];
var searchString = document.getElementById("myInput");
var filter = searchString.value;
result = songList.filter(option => option.value.startsWith(filter));

result.forEach((sound) => {

  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound.value.toUpperCase();;

  btn.addEventListener("click", () => {
    stopSongs(sound);

    document.getElementById(sound.value).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

}