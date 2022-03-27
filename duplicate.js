const names = ['abul', 'babul', 'kabul', 'raisul', 'babul', 'habul', 'abul', 'sabul', 'dabul', 'kabul'];

function removeDuplicate(names) {
    const newArray = [];
    /*   for (let i = 0; i < names.length; i++) {
          const element = names[i];
          console.log(element);
      } */
    for (const element of names) {
        console.log(element);
        if (newArray.indexOf(element) == -1) {
            newArray.push(element);
        }
    }
    return newArray;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);