const mailjet = require('node-mailjet')
  .connect('f12fcb751b5e1930528311b6eb29f00e', '4af8bf87936875645b6b8e8734a5ab0f');

const request = mailjet
  .post('send', { version: 'v3.1' })
  .request({
    Messages: [
      {
        From: {
          Email: 'contact@schauwe.rs',
          Name: 'Michaël',
        },
        To: [
          {
            Email: 'contact@schauwe.rs',
            Name: 'Michaël',
          },
        ],
        Subject: 'Greetings from Mailjet.',
        TextPart: 'My first Mailjet email',
        HTMLPart: '<h3>Dear passenger 1, welcome to <a href=\'https://www.mailjet.com/\'>Mailjet</a>!</h3><br />May the delivery force be with you!',
        CustomID: 'AppGettingStartedTest',
      },
    ],
  });
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
