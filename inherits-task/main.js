function Human() {
    this.name = 'Andrian';
    this.height = 177;
    this.go = function(place) {
        console.log('go to ' + place);
    };
    this.speak = function(word) {
        alert(word);
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
    this.work = function(job) {
        console.log('Do ' + job);
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

// var simba = new Lion();

// console.log(simba.walking());