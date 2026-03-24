// Q1
const student = {
    fullName: "tom fernandies",
    grade: "A",
    section: "abc"
};
console.log(student.grade);


// Q2
const doubleScore = (score) => {
    return score * score;
};
console.log(doubleScore(12));


// Q3
const increaseByFive = function (arr = [1,2,3,4]) {
    return arr.map(a => a * 5);
};
console.log(increaseByFive());


// Q4
function filterPassingMarks(marks = [10,35,40,45]) {
    return marks.filter(m => m >= 40);
}
console.log(filterPassingMarks());


// Q5
const score = [10,35,50,55];

const points = score.map(p => p * 10);
console.log("score->points:", points);

const above = score.filter(s => s > 50);
console.log("score>50:", above);

const total = score.reduce((ts, fs) => ts + fs, 0);
console.log("total score:", total);


// Q6
function findHighestScore(score = []) {
    return score.filter(s => s > 10);
}
console.log(findHighestScore([10,15,25,30]));


// Q7
function checkRating(movie = [
    { movie: "abc", rating: 7 },
    { movie: "xyz", rating: 9 },
    { movie: "pqr", rating: 8.5 }
]) {
    return movie.filter(r => r.rating > 8);
}
console.log(checkRating());


// Q8
function movieList(movie = [
    { movie: "abc", budget: 10000 },
    { movie: "xyz", budget: 20000 },
    { movie: "pqr", budget: 148000 }
]) {
    return movie.reduce((temp, final) => temp + final.budget, 0);
}
console.log("total budget of movie:", movieList());


// Q9
function announceWinner(player) {
    if (player) {
        console.log(`${player} is winner`);
    } else {
        console.log("unknown player");
    }
}
announceWinner("tom");


// Q10
const fbPlayer = ["fb1","fb2","fb3","fb4"];
const bbPlayer = ["bb1","bb2","bb3","bb4"];
console.log(...fbPlayer, ...bbPlayer);


// Q11
function displayMsg(msg) {
    console.log(`${msg}`);
}
displayMsg("the Avengers movie has rating of 9.5 and a budget of $250 million");


// Q12
const students = [
    { name: "tom", marks: 10 },
    { name: "jerry", marks: 15 },
    { name: "harry", marks: 18 }
];
const aboveMarks = students.filter(m => m.marks > 10);
console.log(aboveMarks);


// Q13
function avgTemp(daily = []) {
    return daily.map(wt => wt * 5);
}
console.log(avgTemp([10,20,30]));


// Q14
const goalScore = [
    { name: "tom", goal: 1 },
    { name: "jerry", goal: 2 },
    { name: "harry", goal: 3 }
];
const totalGoal = goalScore.reduce((temp, final) => temp + final.goal, 0);
console.log("total goal score:", totalGoal);


// Q15
const bookTitle = ["abc","xyz","pqr","dfg"];
const [a, x, p, d] = bookTitle;
console.log(a, x);

const libranian = {
    name: "abc",
    branch: "xyz"
};
const { name, branch } = libranian;
console.log(name, branch);


// Q16
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    displayDetails() {
        console.log(`title: ${this.title}, author: ${this.author}, price: ${this.price}`);
    }
}
const b = new Book("xyz", "abc", 450);
b.displayDetails();


// Q17
function flightSeats(seats) {
    return new Promise((resolve, reject) => {
        if (seats >= 1) {
            resolve(`total ${seats} seats available`);
        } else {
            reject("no seats available");
        }
    });
}
flightSeats(2)
.then(res => console.log(res))
.catch(err => console.log(err));


// Q18
function bookingDetails(details) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (details) {
                resolve({
                    name: "tom",
                    email: "tom123@gmail.com",
                    phone: 6512451249
                });
            } else {
                reject("no data available");
            }
        }, 1000);
    });
}

async function checkbookingDetails() {
    try {
        let display = await bookingDetails(true);
        console.log(display);
    } catch (error) {
        console.log(error);
    }
}
checkbookingDetails();


// Q19
function libSys(id) {
    try {
        if (!id) throw new Error("id is invalid");
        console.log(`Authorized id ${id}`);
    } catch (error) {
        console.log(error.name + ":" + error.message);
    }
}
libSys(123);


// Q20
function checkPayment() {
    throw new Error("payment fail");
}

function confirmBooking() {
    try {
        checkPayment();
    } catch (error) {
        console.log(error.name + ":" + error.message);
    }
}
confirmBooking();


// Q21
function libMangement(books) {
    try {
        if (books < 1) throw new Error("Books not available");
        console.log("books available");
    } catch (error) {
        console.log(error.name + ":" + error.message);
    } finally {
        console.log("closing library connection");
    }
}
libMangement(2);


// Q22
class InvalidBook extends Error {
    constructor(msg) {
        super(msg);
        this.name = "InvalidBook";
    }
}

function isValidBook(b) {
    try {
        if (b < 1) throw new InvalidBook("Book doesn't exist");
        console.log("Book exists");
    } catch (error) {
        console.log(error.name + ":" + error.message);
    }
}
isValidBook(0);


// Q23
function validateDestination(city) {
    try {
        if (!city) throw new Error("invalid destination");
        console.log(`destination: ${city}`);
    } catch (error) {
        console.log(error.name + ":" + error.message);
    }
}
validateDestination("mumbai");