console.log('Starting object review...');

//key: value pairs    // general "terms"
//properties: values  //javascript "terms"
//proprties / keys are interchangable
const topHat = {
    type: 'Top',
    color: 'Black',
    size: 14,
};

// set the throw property to an "anonymous function"
topHat.throw = function() {
    console.log('I\'m throwing my top hat!')
}

// set the throw property to a "named function"
function myThrowFunction() {
    console.log('I\'m still throwing my top hat!');
}

topHat.throw = myThrowFunction;

topHat.brand = 'Cowboys';
topHat.color = 'Red';
console.log(topHat.color);

// onject literal declaration
const baseballHat = {
    type: 'Baseball Cap',
    color: 'Red and White',
    size: 12,
    throw: function(){
        console.log('I\'m throwing my baseball cap!');
        return true;
    }
}

// Keep going with objects

//create a list of penguins
//write a function that takes in a list of penguins,
//and returns an array of only the cute ones
let penguins = [
    {
        name: 'Emperor',
        color: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true, //it is cute
    },
    {
        name: 'Little',
        color: ['Slate-Blue', 'White'],
        size: 0.5,
        isCute: true,
    },
    {
        name: 'Rockhopper',
        color: ['Black', 'White'],
        size: 0.75,
        isCute: true,
    },
    {
        name: 'African',
        color: ['Black', 'White'],
        size: 0.5,
        isCute: true,
    },
    {
        name: 'Fattie',
        color: ['Red', 'Black', 'Striped'],
        size: 10.0,
        isCute: false,
    },
];

function getOurFavoritePenguins(allPenguins, maxHeight, favoriteColor){
/*
    geOurFavoritePenguins: returns a list of penguins that match the criteria

    Arguments:
        allPenguins[]: a list of penguin objects to filter
        maxHeight(Number): a number that we use for comparison, defualt is 0.9
        color(string): a color to apply to our favorite filter, optional
*/

if (maxHeight === undefined || typeof(maxHeight) !== typeof(0.0)){
    //if maxHeight is missing, use a 'smart default'
    maxHeight =0.9;
}

if (isNaN(maxHeight)){
    console.log('Sorry maxHeight is invalid');
    return;
}

if (allPenguins !== undefined && allPenguins !== null && allPenguins.length >=0){
    //its correct!
} else{
    console.log('Invalid allPenguins argument');
    return;
}


let favoritePenguins = [];

for (let index = 0; index < allPenguins.length; index++) {
    const penguin = allPenguins[index];
    if (penguin.isCute === true && penguin.size < maxHeight){
        //first, did we get a color? if so, process it, if not, ignore it
        if (favoriteColor === undefined){
            //we did not get a color argument
        favoritePenguins.push(penguin);
        continue; //keep moving in the for loop
        } else{
            //we have a color! lets process it
            //potential fav pengin but only keep if color matches
            if (penguin.color.includes(favoriteColor)){
                //we have a winner!
                favoritePenguins.push(penguin);
            }
        }
    }
}

return favoritePenguins;
}


function isNumber(number){
    //1. is it a type number?
    //2. is it not NaN?
    //--> if both are true, return true. Otherwise return false

    if ((typeof(number) === 'number') && (isNaN(number) === false)) {
        return true;
    }
    return false;
}


//I want every hat to have the same stuff
//color, type, size, etc.

function newHat(type, color, size){
    return {
        type: type,
        color: color,
        size: size,
    }
}

const topHatNew = newHat('Top Hat', 'Black', 15);


//object constructors
//capital letter means "special", its a constructor for 'hat' objects
function Hat(type, color, size){
    //const this = {};
    this.type = type;
    this.color = color;
    this.size = size;
    //return this;

}

//can only use constructors with the 'new' keyword
const funnyHat = new Hat('Beanie', 'Multicolored', 10);