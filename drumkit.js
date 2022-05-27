
window.addEventListener("keydown", (e)=>
{
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);

console.log(e)

if (audio)    
{
    audio.play();
    audio.currentTime=0;
    key.classList.add("playing");
}
return

});


//sound
const boom = document.getElementById('boom')
const clap = document.getElementById('clap')
const hihat = document.getElementById('hihat')
const kick = document.getElementById('kick')
const openhat = document.getElementById('openhat')
const ride = document.getElementById('ride')
const snare = document.getElementById('snare')
const tink = document.getElementById('tink')
const tom = document.getElementById('tom')

//button div
const boomClick = document.getElementById('boomClick')
const clapClick = document.getElementById('clapClick')
const hihatClick = document.getElementById('hihatClick')
const kickClick = document.getElementById('kickClick')
const openhatClick = document.getElementById('openhatClick')
const rideClick = document.getElementById('rideClick')
const snareClick = document.getElementById('snareClick')
const tinkClick = document.getElementById('tinkClick')
const tomClick = document.getElementById('tomClick')




const audioBoom = document.getElementById("audioBoom")
// all other sounds underneath

boomClick.addEventListener("click", () => {
  boom.play()
  boom.currentTime=0;
}) 

clapClick.addEventListener("click", () => {
  clap.play()
  clap.currentTime=0;
}) 

hihatClick.addEventListener("click", () => {
  hihat.play()
  hihat.currentTime=0;
}) 

kickClick.addEventListener("click", () => {
  kick.play()
  kick.currentTime=0;
}) 

rideClick.addEventListener("click", () => {
  ride.play()
  ride.currentTime=0;
}) 

snareClick.addEventListener("click", () => {
  snare.play()
  snare.currentTime=0;
}) 

openhatClick.addEventListener("click", () => {
openhat.play()
openhat.currentTime=0;
}) 

tinkClick.addEventListener("click", () => {
  tink.play()
  tink.currentTime=0;
}) 

tomClick.addEventListener("click", () => {
  tom.play()
  tom.currentTime=0;
}) 