const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
     "582589153085-5b9fk72tatv93vevsg0c4i5ecfi62vfr.apps.googleusercontent.com", // ClientID
     "H_zJvoRLedBAKXT88isiSzDZ", // Client Secret
     "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
     refresh_token: "1//04EOrLpbvN2o9CgYIARAAGAQSNwF-L9IrmsEKa5Tpzpd3OexcQf6FavBuQFf9pZDE8S_5nv_cGfeR6oUTNNKQaT5BbL_pT5BxG_A"
});

const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
     service: "gmail",
     auth: {
          type: "OAuth2",
          user: "hello@pixelstocode.com", 
          clientId: "582589153085-5b9fk72tatv93vevsg0c4i5ecfi62vfr.apps.googleusercontent.com",
          clientSecret: "H_zJvoRLedBAKXT88isiSzDZ",
          refreshToken: "1//04EOrLpbvN2o9CgYIARAAGAQSNwF-L9IrmsEKa5Tpzpd3OexcQf6FavBuQFf9pZDE8S_5nv_cGfeR6oUTNNKQaT5BbL_pT5BxG_A",
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
        to: 'hello@pixelstocode.com',
        subject: subject,
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, (error, response) =>
            error ? reject(error) : resolve(response)
        )
        smtpTransport.close();
    })
}

module.exports = send