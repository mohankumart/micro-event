const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);
    // posts
    axios.post('http://posts-clusterip-srv:4000/events', event);

    // comments
    axios.post('http://comments-srv:4001/events', event);

    // query service
    axios.post('http://query-srv:4002/events', event);

    // moderation service
    axios.post('http://moderation-srv:4003/events', event);

    res.send({ status: 'ok' });
});

app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('listening on port 4005');
});
