//THE FAMILY

const perezClanMembers = [
    'LALO',
    'ELLA',
    'Maria Perez',
    'Mel',
    'Gonzalo Perez',
    'Lara Garcia',
    'Marco',
    'Lilian Perez',
    'Bernarda',
    'El viejo de arriba'
]

// Members with the letter 'a' in their names

const membersWithaInTheirNames = perezClanMembers.filter((member) => {
   return (member.indexOf('a') !== -1);
})
console.log(membersWithaInTheirNames);

// Members whose name includes the word Perez

const membersIncludesPerez = perezClanMembers.filter((member) => {
   return (member.includes('Perez'));
})
console.log(membersIncludesPerez);


// Members that have ALLCAPS names

const membersWithAllCapsNames = perezClanMembers.filter((member) => {
   return (member === member.toUpperCase());
})
console.log(membersWithAllCapsNames);

// Members with a space in their name

const membersWithSpaceInTheirNames = perezClanMembers.filter((member) => {
   return (member.includes(' '));

})
console.log(membersWithSpaceInTheirNames)
