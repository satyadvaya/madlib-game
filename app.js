// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const timeOfDayInput = document.getElementById('timeOfDay-input');
const timeOfDaySpan = document.getElementById('timeOfDay-span');

const holidayInput = document.getElementById('holiday-input');
const holidaySpan = document.getElementById('holiday-span');

const typeOfAbodeInput = document.getElementById('typeOfAbode-input');
const typeOfAbodeSpan = document.getElementById('typeOfAbode-span');

const animal1Input = document.getElementById('animal1-input');
const animal1Span = document.getElementById('animal1-span');

const verb1Input = document.getElementById('verb1-input');
const verb1Span = document.getElementById('verb1-span');

const animal2Input = document.getElementById('animal2');
const animal2Span = document.getElementById('animal2-span');

const clothing1Input = document.getElementById('clothing1-input');
const clothing1Span = document.getElementById('clothing1-span');

const partOfHouseInput = document.getElementById('partOfHouse-input');
const partOfHouseSpan = document.getElementById('partOfHouse-span');

const mythicalCreatureInput = document.getElementById('mythicalCreature-input');
const mythicalCreatureSpan = document.getElementById('mythicalCreaturepan');

const activeVerbInput = document.getElementById('activeVerb-input');
const activeVerbSpan = document.getElementById('activeVerb-span');

const fiestyCreaturesInput = document.getElementById('feistyCreatures-input');
const fiestyCreaturesSpan = document.getElementById('feistyCreatures-span');

const loungyFurnitureInput = document.getElementById('loungyFurniture-input');
const loungyFurnitureSpan = document.getElementById('loungyFurniture-span');

const fruitInput = document.getElementById('fruit-input');
const fruitSpan = document.getElementById('fruit-span');

const bodyPart1Input = document.getElementById('bodyPart1-input');
const bodyPart1Span = document.getElementById('bodyPart1-span');

const familyMemberInput = document.getElementById('familyMember-input');
const familyMemberSpan = document.getElementById('familyMember-span');

const clothing2Input = document.getElementById('clothing2-input');
const clothing2Span = document.getElementById('clothing2-span');

const clothing3Input = document.getElementById('clothing3-input');
const clothing3Span = document.getElementById('clothing3-span');

const bodyPart2Input = document.getElementById('bodyPart2-input');
const bodyPart2Span = document.getElementById('bodyPart2-span');

const nounInput = document.getElementById('noun-input');
const nounSpan = document.getElementById('noun-span');

const madlibContainer = document.getElementById('madlib-container');

const inputContainer = document.getElementById('input-container');

const buttonInput = document.getElementById('button-input');

buttonInput.addEventListener('click', () => {
    timeOfDayInput.value = timeOfDaySpan.textContent;

    // const divideTotal = Number(firstDivideInput.value) / Number(secondDivideInput.value);
    // quotientDisplay.textContent = divideTotal;
});

export function sync(input, span){
    span.textContent = input.value;
}

divideButton.addEventListener('click', () => {
    quotientDisplay.textContent = divide(Number(firstDivideInput.value), Number(secondDivideInput.value));