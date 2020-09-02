const isMod3 = (num)=> num % 3 === 0; 
const isMod5 = (num)=> num % 5 === 0; 
const isMod3And5 = (num)=> isMod3(num) && isMod5(num); 

module.exports = (count)=> {
  return new Array(count).fill('')
    .map( (value, idx)=> {
      const i = idx + 1;
      if(isMod3And5(i)){
        return 'fizzBuzz';
      }
      if(isMod3(i)){
        return 'fizz';
      }
      if(isMod5(i)){
        return 'buzz';
      }
      return idx + 1;
    });
  /*
  const results = [];
  for(let i = 1; i <= count; i++){
    if(isMod3And5(i)){
      results.push('fizzBuzz');
    }
    else if(isMod3(i)){
      results.push('fizz');
    }
    else if(isMod5(i)){
      results.push('buzz');
    }
    else {
      results.push(i);
    }
  }
  return results;
  */
};
