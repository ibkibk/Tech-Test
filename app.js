class Wasp {
    constructor(sp, name, hitPoint) {
        this.sp = sp;
        this.name = name;
        this.hitPoint = hitPoint;
    }

    losePoints() {
        const afterHit = this.sp - this.hitPoint;
        if(afterHit > 0){
            this.sp -= this.hitPoint;
        } else {
            this.sp = 'dead';
            if(this.name === 'Queen') {
                alert('game over')
            }
        }
    }

    get html() {
        return `<div class="wrap">${this.name}<div id="first">${this.sp}</div></div>`;
    }
}
let wasp = [];
// ===============================================================================================
class Queen extends Wasp {
    constructor() {
        super(80, "Queen", 7);
    }
}

class Worker extends Wasp {
    constructor() {
        super(68, "Worker", 12);
    }
}

class Drone extends Wasp {
    constructor() {
        super(60, "Drone", 10);
    }
}

// newDrone.reducedPoint();
// console.log(newDrone.hitPoints);

document.querySelector(".A").addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * wasp.length);
    const randomWasp = wasp[randomNumber];
    randomWasp.losePoints();
    // console.log(randomNumber);
    update();
});

const wrap = document.querySelector(".wrap");

const update = () => {
    wrap.innerHTML = "";
    wasp.forEach(insect => {
        wrap.innerHTML += insect.html;
    });
}

const start = () => {

    // let boxes = [{id:1,name:'Queen',life:80},{id:2,name:'Worker',life:10},{name:'Drone',life:20},{name:'Drone',life:20}];


    wrap.innerHTML = "";
    const newQueen = new Queen();
    wasp.push(newQueen);
    wrap.innerHTML += newQueen.html;

    for (let i = 0; i < 5; i++) {
        const newWorker = new Worker();
        wasp.push(newWorker);
        wrap.innerHTML += newWorker.html;
    }

    for (let i = 0; i < 9; i++) {
        const newDrone = new Drone();
        wasp.push(newDrone);
        wrap.innerHTML += newDrone.html;
    }
}

start();


