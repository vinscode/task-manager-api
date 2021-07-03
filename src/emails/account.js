const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vinaydoggali@gmail.com',
        subject: 'Welcome to the app!',
        text: `Thanks for joining in, ${name}. Let me know how you get along with the app.`
    })    
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vinaydoggali@gmail.com',
        subject: 'Good-Bye!',
        text: `Hi ${name}, It was nice to have you on board. Please let me know how to improve so that you can use our app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}