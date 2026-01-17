const countdownScreen = document.getElementById("countdownScreen");
const mainContent = document.getElementById("mainContent");
const timerEl = document.getElementById("timer");
const music = document.getElementById("music");
music.volume = 0.4; // volume 15%



const birthday = new Date("January 15, 2026 22:05:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const diff = birthday - now;

  if(diff <= 0){
    countdownScreen.style.display="none";
    mainContent.classList.remove("hidden");
    music.play();
  }else{
    const h = Math.floor(diff/(1000*60*60));
    const m = Math.floor((diff%(1000*60*60))/(1000*60));
    const s = Math.floor((diff%(1000*60))/1000);
    timerEl.innerHTML = `${h}h ${m}m ${s}s`;
  }
},1000);

/* Gallery Slider */
let currentIndex = 0;
const track = document.getElementById("galleryTrack");
const total = track.children.length;

function updateSlide(){
  track.style.transform = `translateX(-${currentIndex * 280}px)`;
}

function nextSlide(){
  currentIndex = (currentIndex + 1) % total;
  updateSlide();
}

function prevSlide(){
  currentIndex = (currentIndex - 1 + total) % total;
  updateSlide();
}

/* Auto slide */
setInterval(nextSlide, 4000);

/* Surprise */
function crazySurprise(){
  document.getElementById("crazyBox").innerHTML = `
    😂😂😂<br>
        You’re officially older but still cool 😎🔥<br>

    <img src="meme.gif" width="200">
  `;
}

function openLetter(){
  document.getElementById("letterOverlay").classList.add("active");
}

function closeLetter(){
  document.getElementById("letterOverlay").classList.remove("active");
}

function openLetter(){
  document.getElementById("letterModal").style.display="flex";
}

function closeLetter(){
  document.getElementById("letterModal").style.display="none";
}
