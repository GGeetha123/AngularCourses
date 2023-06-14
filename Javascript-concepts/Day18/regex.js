
words = ['raj','ram','Arun','Jacob',
 'Nation','Lotion','Station','Activity',
'12343','343','pig','gig','gag','tea','naresh@gmail',
'arun@gmail.com','james_123@yahoo.com','sarah@gmail.com',
'nakul35','John',"Jhon",'kane@gmail','235Rogue','Green','stream',
'Port','is','so','hi','99','19','9','909','7$4','2.1','123@gmail.net',
'roger.213@gmail.net','harry.35@hotmail.org','net@net34.com']

regex = /^g //starts with g
regex = /$l // ends with l
regex = /^[rgt] //starts any of the character r or g t
regex = /^[0-9] // any of the numbers starts from 0 or 1 or 2..till 9
regex = /^[A-JS-Z] //
regex = /^[A-Za-z][A-Za-z][A-Za-z]$/  // starts with Alphabet and ends with Alphabet. Middle also Alphabet. only three characters.
regex = /^[A-Za-z][A-Za-z]+[A-Za-z]$/ //sarts with Alpha and ends with Alpha, middle also alphabet but one or more occurances [due to + symbol]
regex = /^[A-Za-z][A-Za-z]*[A-Za-z]$/ //sarts with Alpha and ends with Alpha, middle also alphabet but Zero or more occurances[due to * symbol]
regex = /^[0-9][0-9]*[0-9]$/ //starts with number and ends with number, middle also some number
regex = /^[0-9]$/
regex = /^[A-Za-z][A-Za-z]{4}[A-Za-z]$/ //starts and ends with Alpha and middle 4 characters due to {4}
regex = /^[A-Za-z][A-Za-z]{2,4}[A-Za-z]$/ //starts and ends with Alpha and middle minimum 2 characters and max of 4 characters due to {2,4}
regex = /.../  // three characters inculding number also ie.. length of 3  [dot is any character]
regex = /^[a-z][a-z0-9_\.]{4,}@[a-z]{3,15}\./ //check the email id
regex = /^[a-z][a-z0-9_\.]{4,}@[a-z]{3,15}\.(com|net|in|org)$/ //check the email id with com or net or in org
// should be followed by @ character, small alpha characters minimum 3 and max 15 characters and followed dot symbol
regex = /J(ho|oh)n/   // either ho or oh...due to pipe symbol