const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const { oauth2 } = require('googleapis/build/src/apis/oauth2')

const CLIENT_ID='367044967678-5gpg3pbtk5lmbabb9avsj5ue1n229r44.apps.googleusercontent.com'
const CLIENT_SECRET='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'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04B-oS6SR3G1jCgYIARAAGAQSNwF-L9IrwYW_J6hlLC66_E1YXYniQ0LtP2LSfHJU1kOIG5hi9doNzrbsBIQZ5LGXAlzB1TyRHuw'

const oAuth2Client= new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

async function sendMail(){
try{
const accessToken = await oAuth2Client.getAccessToken()
const transport = nodemailer.createTransport({
service: 'gmail',
auth: {
type: 'oauth2',
user: 'btech10445.21@gmail.com',
clientId: CLIENT_ID,
clientSecret: CLIENT_SECRET,
refreshToken: REFRESH_TOKEN,
accessToken: accessToken
},
tls: {
    rejectUnauthorized: false
  }
})
const mailOptions = {
from: 'YOURSTRULY<btech10445.21@gmail.com>',
to: 'sukham740@gmail.com',
subject: "Hello!",
text: 'Hello bhadwe',
html: '<h1>Ban gya ab so jao</h1>',
}
const result =  await transport.sendMail(mailOptions)
return result
}
catch(error){
return error
}
}

sendMail()
.then((result)=> console.log('Email sent',result));
