var userModule = (function (userName, userAge) {
    var name = userName,
        age = userAge,
        sayName = function () {
            console.log(name);
        },
        sayAge = function () {
            console.log(age);
        },
        setName = function (newName) {
            name = newName;
        };

        return {
            name: name,
            age: age,
            sayName: sayName,
            sayAge: sayAge,
            setName: setName
        }
})('dima', 21);

userModule.sayName();
userModule.sayAge();
userModule.setName('Petro');
userModule.sayName();