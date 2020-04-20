const sgMail = require('@sendgrid/mail');

const send = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, phone, message } = req.body

  const content = {
    to: 'contact@pixelstocode.com',
    from: 'contact@pixelstocode.com',
    subject: `New Message From - ${name} (${email})`,
    text: message,
    html: `<p>${message}</p></br><p>Tel: ${phone}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    res.status(400).send('Message not sent.')
  }
}

module.exports = send