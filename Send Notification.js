

import express from 'express';
import { json } from 'body-parser';
import { sendNotification } from './notificationController';

const app = express();
const port = 3000;

app.use(json());

// Routes
app.post('/notify', sendNotification);

app.listen(port, () => {
    console.log(`Notification service running at http://localhost:${port}`);
});





export function sendNotification(req, res) {
    const { message, recipient } = req.body;

    if (!message || !recipient) {
        return res.status(400).send({ error: 'Message and recipient are required' });
    }

    // Simulate sending notification  to recipient
    console.log(`Sending message: "${message}" to recipient: "${recipient}"`);

 
    res.status(200).send({ success: true, message: 'Notification sent successfully' });
}