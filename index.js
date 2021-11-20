const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000;
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/911670334921527356/ivd-iK_Ra-EuD3ydd-nTO3aaNN_tdsX6xTGRcO6gXK5oLZsuJU5ixpkRM6sYxX0s98ak");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))

// ye sab abhi banaya 10 baad haa
// teko sikhau
// simple he


//get the index.html file
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});


// send form data to the discord server
app.post('/', (req, res) => {
    var person_name = req.body.name;
    var contact_number = req.body.contact_number;
    var sort_message = req.body.sort_message;
    console.log(person_name);
    console.log(contact_number);
    console.log(sort_message);

    //send data

    hook.send("Hello sir, " + person_name + " Wants to call you \n Number is :" + contact_number + "\n Message is :" + sort_message);
    res.send("Message send")
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, () => { console.log('Server started at port : '+port); });