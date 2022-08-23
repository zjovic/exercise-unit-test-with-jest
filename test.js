// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106,58 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar = 0.83 euros, than 3.5 dollars = 2.91 euros
    // if 1 euro = 127.9 pounds, than 3.5 dollars = 406.95 yen
    const expected = (3.5 / 1.2) * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBeCloseTo(373.04); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 0,006 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromYenToPound(1000)

    // if 1 yen = 0,007 euros, than 1000 yen = 7.8 euros
    // if 1 euro = 0.8 pounds, than 1000 yen = 6.25 punds
    const expected = (1000 / 127.9) * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBeCloseTo(6.25); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})