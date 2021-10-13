var todaysDate = new Date()
console.log(`Todays Date ${todaysDate}`);
var futureDate = new Date(2022, 1, 2, 12, 30, 45)
console.log(`Future Date - ${futureDate}`);

var dateOfBirth = new Date('June 30 1998')
console.log(`Date Of Birth - ${dateOfBirth}`);

var findDateUsingMilliseconds = new Date(86400000)
console.log(`Date with Milliseconds - ${findDateUsingMilliseconds}`);
console.log('-----------------======--------------------');
console.log(`Full Year - ${todaysDate.getFullYear()}`);
console.log(`Month - ${todaysDate.getMonth()}`);
console.log(`Date - ${todaysDate.getDate()}`);
console.log(`Day - ${todaysDate.getDay()}`);

console.log(`Date  time- ${Date.now()}`);

console.log('--------------Full Months----');

var months = ['Januvary','February','March', 'April','May','June','July','Agust','September', 'October','November','December']
 var formatDate = new Date('dec 10,2022')
 var month = formatDate.getMonth()

 console.log(`${months[month]} ${formatDate.getDate()}, ${formatDate.getFullYear()}`);

 console.log('----------------=NEW FUll month And Full Day==--------------');
 var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
 var months = ['Januvary','February','March', 'April','May','June','July','Agust','September', 'October','November','December']

 var month = formatDate.getMonth()
 var formatDate = new Date('sept 1 2020')
 var day = formatDate.getDay()
 console.log(`${days[day]},${months[month]} ${formatDate.getMonth()},${formatDate.getFullYear()}`);

 console.log('==========Math methods=================');
 console.log(Math.round(1.8));
 console.log(Math.abs(-6));
 console.log(Math.pow(5,6));
 console.log(Math.min(1,5));
 console.log(Math.max(5,6,10));
 console.log(Math.ceil(12.5));
 console.log(Math.floor(12.2));
 console.log(Math.random());
 console.log('-------Math round numbers to 1 to 100 -------')
 console.log(Math.round(Math.random()*100 + 1));
 console.log('------------or----------------------');
 console.log(Math.ceil(Math.random()*100 ));



