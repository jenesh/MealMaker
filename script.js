const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {

    },
    set appetizers(ele) {

    },
    get mains() {

    },
    set mains(ele) {

    },
    get desserts() {

    },
    set desserts(ele) {

    },
    get menu() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    // Get random dish from a course on the menu
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + mains.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${mains.name}, ${dessert.name} and your total price is $${totalPrice}.`
    }
};

menu.addDishToCourse('appetizers', 'Calamari', 10.99)
menu.addDishToCourse('appetizers', 'Chicken Wings', 12.99)
menu.addDishToCourse('appetizers', 'Crab Cakes', 15.99)
menu.addDishToCourse('mains', 'Steak', 25.99)
menu.addDishToCourse('mains', 'Lobster Rissoto', 29.99)
menu.addDishToCourse('mains', 'Meatloaf', 26.99)
menu.addDishToCourse('desserts', 'Rice Pudding', 7.99)
menu.addDishToCourse('desserts', 'Lava Cake', 7.99)
menu.addDishToCourse('desserts', 'Fried Green Tea', 7.99)

const meal = menu.generateRandomMeal();
// console.log(menu._courses)
console.log(meal)