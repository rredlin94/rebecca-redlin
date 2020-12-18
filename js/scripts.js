// Array to store messages

var messages = [];

// Message Type lookup object similar to enum.

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Seed data

var data =[
    {
        type: messageType.out,
        user: 'Rebecca',
        message: 'Hey, what are you doing for lunch?'
    },

    {
        type: messageType.in,
        user: 'Josh',
        message: 'I waa thinking about some Speed Queen'
    },

    {
        type: messageType.out,
        user: 'Rebecca',
        message: 'Sounds Yummy!'
    }
];

// Message constructor function.

function Message(type, user, message) {
    this.type =type;
    this.user = user;
    this.message = message;
}

// Function to create and return and element for the supplied message.

function createMessageElement(messge) {

    // Create the text element for the message
    var messageEl = document.createElement('div');
    messageEl.className = message.type;

    return messageEl;
}

// Button click event handler to add a new message.

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = documnet.getElementById('message-container');

    // Determeine message typ0e and set message variable accordingly.

    switch (event.AT_TARGET.id) {
        case 'send-button': 
            user = 'Rebecca';
            type = messgaeType.out;
            break;
        case 'reply-button':
            user = 'Josh';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    // Create new message.

    if (messageInput.value != '') {
        // Construct a messafe and add it to the array.
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        // Create a message element.
         var el = createMessageElement(message);

         // Add the message element to the DOM.
         messageContainerEl.appendChild(el);

         // Reset input.
         messageInput.value = '';
    }

    // Load seed data from datat array asbove.

    function loadSeedData() {
        for (var i = 0; i < data.length; i++) {
            var message = new Message(data[i].type, data[i].user, data[i].message);
            messages.push(message);
        }

        // Load with pre-loaded message

        var messagesContainerEl = document.getElementById('message-container');

        for (var i = 0; i < messages.length; i++) {
            var message = messages[i];
            var el = createMessageElement(message)

            messagesContainerEl.appendChild(el);
        }
    }

    var init = function(){
        // Wire event handler
        document.getElementById('send-button').onclick = addMessageHandler;
        document.getElementById('reply-button').onclick = addMessageHandler;

        //Load seed data from data array above
        loadSeedData();
    };

    init();
}