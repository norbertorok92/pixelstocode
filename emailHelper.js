const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
     "1033207115137-cq651uevt6rroreslahupm54sickiq05.apps.googleusercontent.com", // ClientID
     "Ij3_xAir213W_zRHRi_WuXDh", // Client Secret
     "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
     refresh_token: "1//04EQKj2yP-t8bCgYIARAAGAQSNwF-L9Ire1TJf6M11uN6Imy_iRmbEJL7c3lHDWRO7ODjkpgZOYM2AVbaDzPPPa6EIS8VrnSKK_g"
});

const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
     service: "gmail",
     auth: {
          type: "OAuth2",
          user: "norbert.torok92@gmail.com", 
          clientId: "1033207115137-cq651uevt6rroreslahupm54sickiq05.apps.googleusercontent.com",
          clientSecret: "Ij3_xAir213W_zRHRi_WuXDh",
          refreshToken: "1//04EQKj2yP-t8bCgYIARAAGAQSNwF-L9Ire1TJf6M11uN6Imy_iRmbEJL7c3lHDWRO7ODjkpgZOYM2AVbaDzPPPa6EIS8VrnSKK_g",
          accessToken: accessToken
     }
});

const send = ({ name, email, phone, subject, text }) => {

    const textBody = `Name: ${name}   
                Subject: ${subject}             
                Email: ${email}
                Phone: ${phone}
                Body: ${text}
                This email came from PixelsToCode
                `

    const from = name && email ? `${name} <${email}>` : `${name || email}`

    const mailOptions = {
        from,
        to: 'norbert.torok92@gmail.com',
        subject: subject,
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, (error, info) =>
            error ? reject(error) : resolve(info);
            smtpTransport.close();
        )
    })
}

module.exports = send