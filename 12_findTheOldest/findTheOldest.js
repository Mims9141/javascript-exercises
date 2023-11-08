const findTheOldest = function(list) {
    const currentYear = new Date().getFullYear();
  
    const getAge = list.map(person => {
      const age = !person.yearOfDeath ? currentYear - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
      return { ...person, age };
    });
  
    const oldest = getAge.reduce((oldestPerson, currentPerson) => {
      return oldestPerson.age > currentPerson.age ? oldestPerson : currentPerson;
    });
  
    return oldest;
  };


// Do not edit below this line
module.exports = findTheOldest;
