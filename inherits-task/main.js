var zooAnimals = [];

function Human() {
    this.name = 'Andrian';
    this.height = 177;

    this.go = function(place) {
        console.log('go to ' + place);
    };

    this.speak = function(word) {
        alert(word);
    };
    this.pet = 'pet';

    this.getPet = function (petKind) {
        this.pet = new window[petKind]();
    };

    this.catchAnimal = function (animalKind) {
        var catchingAnimal = new window[animalKind];
        catchingAnimal.catch();
        zooAnimals.push(catchingAnimal);
    };
}

function Man() {
    this.getMoney = function() {
        console.log('Get much money');
    };
}

function Woman() {
    this.spend = function() {
        console.log('Spend a lot of money');
    };
}

Man.prototype = new Human();
Woman.prototype = new Human();

function Hunter() {
    this.weapon = 'gun';
    this.hunt = function(animal) {
        console.log('Kill ' + animal);
    };
}

function Worker() {
    this.tools = 'hummer';
    this.position = '';
    this.work = function(job) {
        console.log('Do ' + job);
    };
    this.getPosition = function (position) {
        this.position = position;
    };
}

Hunter.prototype = new Man();
Worker.prototype = new Man();


function Librarian() {
    this.bringBook = function(book) {
        console.log('Give ' + book)
    }
}

function Nurse() {
    this.noticeBaby = function(baby) {
        console.log('Looking forward ' + baby);
    }
}

Librarian.prototype = new Woman();
Nurse.prototype = new Woman();

function Animal() {
    this.name = 'name';
    this.age = 1;
    this.walking = function () {
        alert('Walk')
    };
    this.status = 'free animal';
    this.catch = function () {
        this.status = 'zoo animal';
    };
}

function Herbivorous() {
    this.food = 'plants';
}

function Predator() {
    this.food = 'meet';
}

Herbivorous.prototype = new Animal();
Predator.prototype = new Animal();

function Horse() {
    this.kind = 'Horse';
}

function Cow() {
    this.kind = 'Cow';
}

Horse.prototype = new Herbivorous();
Cow.prototype = new Herbivorous();

function Tiger() {
    this.kind = 'Tiger';
}

function Lion() {
    this.kind = 'Lion';
}

Tiger.prototype = new Predator();
Lion.prototype = new Predator();

function ZooWorker() {
    this.position = 'zoo worker';
}

ZooWorker.prototype = new Worker();

var jon = new ZooWorker();
console.log(jon.position);
jon.getPet('Horse');
console.log(jon.pet);
jon.catchAnimal('Lion');
console.log(zooAnimals);

var simba = new Lion();
console.log(simba);
simba.catch();
console.log(simba.kind);

