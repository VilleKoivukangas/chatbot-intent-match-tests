# chatbot-intent-match-tests
Create messages, edit them, send them to chatbot and check if bot recognized the message.

## How it works

1. Program finds an OpenNLP setting
2. Program trains your training data with these settings
3. Program finds a message category
4. Program finds a message inside the category
5. Program finds name of edit method
6. Program uses these methods to original message
7. Program sends the edited message to bot and saves the response
8. Whole thing again and again until every scenario is done

With default settings the program is going to send `90(settings) * 45(message-edits) * 40(messages) = 162 000` http requests. So it is going to take a while.

## OpenNLP settings
You can add/remove/change OpenNLP settings from `settings.js`. By default there is 90 different settings.

## Messages
`data.json` contains different categories for messages. And inside of categories there is actual messages. Make sure these messages are exactly same as in your OpenNLP training data.  

## Add methods
To create new methods you need to:

1. Add new object to `message-edits.js`
2. Add new switch case to `controllers/EditMessage.js`
3. Add the method to `controllers/EditMessage.js`

## Usage

This is made for [Metamind](https://github.com/Metatavu/metamind-api) but can be possibly used in other OpenNLP bots as well.

1. Run `npm install`
2. Make sure `config.js` is ok
3. Run `node app`
4. Go out and have fun beacuse it's going to take a while

_Note: Make sure that you use the forked version of node-cmd package_