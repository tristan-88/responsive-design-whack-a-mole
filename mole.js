 
    function popUpRandomMole() {
       const moleHeads = document.querySelectorAll(
         ".wgs__mole-head:not(.wgs__mole-head--whacked"
       ); 
                
        const randomNum = Math.floor(Math.random() * moleHeads.length)
        let moleHeadRandom = moleHeads[randomNum]

        if (!moleHeadRandom) {
            console.log('You have won 🏆, you have killed all the moles!!!')
            return
        }
            moleHeadRandom.classList.remove("wgs__mole-head--hidden")
        setTimeout(() => {
                hideMole(moleHeadRandom);
            },3000)
        
    }

    function hideMole(mole) {
        mole.classList.add("wgs__mole-head--hidden");
        setTimeout(() => {
            popUpRandomMole()
        },1000)
    }

window.addEventListener("DOMContentLoaded", (event) => {

  setTimeout(() => {
    popUpRandomMole();
  }, 0);
    const moleHeads = document.querySelectorAll(".wgs__mole-head");
    moleHeads.forEach((mole) => { 
        mole.addEventListener('click', (event) => {
            event.target.classList.add("wgs__mole-head--hidden");
            event.target.classList.add("wgs__mole-head--whacked")
        })
    })
    
    
});
