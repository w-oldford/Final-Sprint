fetch('./sprint.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(person => {
        console.log(person.fname);
        html = `<p>${getFullName(person)} is ${person.age} years old and was born in ${getBirthYear(person)}, and has the initials, ${getInitials(person)}</p>`
        document.getElementById("person").innerHTML += html;
        console.log(html)
    });
    console.log(data); 
 })
  .catch(error => {
    console.error(error);
  });

function getFullName (person){
    return `${person.fname} ${person.lname}`
}
function getBirthYear(person) {
    const curYear = new Date().getFullYear()
    const birthYear = curYear - person.age
    return `${birthYear}`
}
function getInitials(person) {
    return `${person.fname[0]}. ${person.lname[0]}.`
}