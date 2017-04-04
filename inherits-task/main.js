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

