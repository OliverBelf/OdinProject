let john = { name: "john", surname: "smith", id: 1 };
let pete = { name: "pete", surname: "hunt", id: 2 };
let mary = { name: "mary", surname: "key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((item) => ({
  fullName: item.name + " " + item.surname,
  id: item.id,
}));

/*
usersmapped = [
  { fullname: "john smith", id: 1 },
  { fullname: "pete hunt", id: 2 },
  { fullname: "mary key", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
