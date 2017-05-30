const {SHA256} = require('crypto-js'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs');


var password = '777leprechaun!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

// var hashedPassword = '$2a$10$g55Ze0ns79832Cp7LPdzUOlFxR4clnExEdsFRzDPUxWahTz/OlLd.';
var hashedPassword = '$2a$10$bDd/OihiMZ.gjSNWFMjMG.gx.Hf4D39r2ZnMHF1Fx4UpIqEikfKRK';
// interesting that both versions of hashedPassword return true value.

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);


// var message = 'I am user number 3',
//     hash = SHA256(message).toString();
//
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secretsauce').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'secretsauce').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
