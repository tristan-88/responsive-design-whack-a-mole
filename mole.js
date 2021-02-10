

window.addEventListener("DOMContentLoaded", (event) => {

    
  
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}  
    function popUpRandomMole() {
        const moleHeads = document.querySelectorAll(".wgs__mole-head");
     
        
        console.log(moleHeads)
        const randomNum = getRandomIntInclusive(0, 7)
        let moleHeadRandom = moleHeads[randomNum]
        console.log(moleHeadRandom)
        moleHeadRandom.classList.remove("wgs__mole-head--hidden")
    
        setTimeout(() => {
            hideMole(moleHeadRandom);
        },1000)
    }

    function hideMole(mole) {
        mole.classList.add("wgs__mole-head--hidden");
        setTimeout(() => {
            popUpRandomMole()
        },1000)
    }

  setTimeout(() => {
    popUpRandomMole();
  }, 0);
    
    
});
