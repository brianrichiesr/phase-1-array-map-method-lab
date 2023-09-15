const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  /* Map through the global array 'tutorials' */
  let result = tutorials.map(each => {
    /* Split 'each' iteration and assign the array to a variable, then map through the array */
    let sentence = each.split(' ').map(item => {
      /* Reassign the value of 'item' to the first letter of 'item' capitalized plus the remainder of 'item' */
      item = item[0].toUpperCase() + item.slice(1);
      /* Return the capitalized 'item' */
      return item;
    });
    /* Return the value of 'sentence' joined back into a sentence as 'each' */
    return sentence.join(' ');

  })
  /* Return the new array of capitalized titles */
  return result;

}
