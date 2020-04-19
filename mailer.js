
const sgMail = require('@sendgrid/mail')

const send = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message } = req.body

  const content = {
    to: 'norbert.torok92@gmail.com',
    from: email,
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
      console.log('process.env.SENDGRID_API_KEY', process.env.SENDGRID_API_KEY)
    console.log('ERRORrrr', process.env.SENDGRID_API_KEY)
    res.status(400).send('Message not sent.')
  }
}

module.exports = send