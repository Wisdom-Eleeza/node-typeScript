const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const jwt = require('jsonwebtoken');
const { sendMagicaLinkEmail } = require('mailer');

const app = express();
app.use(express.urlencoded({ extended: true }));

const USERS = {
    id: 1, // provided by mongoose
    email: 'kyle@gmail.com',
    name: '', // in my case firstName, lastName
};

app.post('/login', async (req, res) => {
    const user = USERS.find((u) => u.email === req.body.email);

    if (user != null) {
        try {
            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1h',
                }
            );
            await sendMagicaLinkEmail({ email: user.email, token });
        } catch (error) {
            return res.send('Error logging in. Please try again');
        }
    }
    res.send('Check your eamil to finish logging in');
});

app.get('/verify', (req, res) => {
    const { token } = req.query;
    // if(token == null)
    if (!token || token == null) return res.sendStatus(401);
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = USERS.find((u) => u.id === decodedToken.userId);
        res.send(`Authed as ${user.name}`);
    } catch (error) {
        res.sendStatus(401);
    }
});
