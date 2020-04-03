// # Wasp Game 
// You may only use JS / CSS / HTML for this task and no frameworks or libraries. 
// You can use sessions. The whole program should be written in one single file and may be either procedural or 
// object oriented. It should be possible to place the file anywhere within a website and for it to be run in a 
// browser. 
// Create a simple text only game with a single button that hits a random wasp from a nest of wasps. 
// Each time the button is pressed, a wasp is hit and its points reduced. Once 
// its points have gone to zero the wasp dies and cannot be hit again. 
// The screen shows the state of all the wasps after each hit. 
// The game is over when all wasps have died. You should be able to start a new game 
// once the game is over. 
// You should be able to solve this in under 150 lines including comments and any more than that 
// is a sign you have over complicated the problem. You can use basic html and css to tidy up the output, 
// but the solution should be simple text and a button rather than any styled UI. 
// You start the game with the following wasps. 
// ## 1 x Queen  
// * 80 Hit Points  
// * Loses 7 hit points every time it is hit  
// * All wasps die if the queen is killed 
// ## 5 x Worker wasps  
// * Each one starts with 68 hit points  
// * Each one Loses 10 hit points each time it is hit 
// ## 8 x Drone wasps  
// * Each starts with 60 hit points  
// * Each loses 12 hit points each time it is hit. 
// This task should take no more than 60 - 90 minutes to complete. Send us the final HTML file.
//  Be prepared to talk through your solution. 

class Wasps {
    constructor(name, lives) {
        this.name = name;
        this.lives = lives;
    }
}

class Queen extends Wasps {
    constructor() {
        super("Queen", 80);
    }
    attack() {
        this.lives -= 7;
    }
}

class Worker extends Wasps {
    constructor() {
        super("Worker", 68);
    }
    attack() {
        this.lives -= 10;
    }
}

class Drone extends Wasps {
    constructor() {
        super("Drone", 60);
    }
    attack() {
        this.lives -= 12;
    }
}

const reset = () => {
    wasps = [];
    wasps.push(new Queen())
    for (let i = 0; i < 8; i++) {
        wasps.push(new Drone())
    }
    for (let i = 0; i < 5; i++) {
        wasps.push(new Worker())
    }

}

let wasps = [];
reset();
const displayWaspsInThePage = () => {
    const alivewasps = wasps.filter(wasp => (wasp.lives > 0))
    const content = alivewasps.map(wasp => `<div class="wasp">${wasp.name}<span class="health">${wasp.lives}</span></div>`)
    document.querySelector(".wasps").innerHTML = content.join("");
}
displayWaspsInThePage();

document.querySelector(".kill").addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * wasps.length);
    const randomWasp = wasps[randomNumber];
    randomWasp.attack();
    displayWaspsInThePage();
});
