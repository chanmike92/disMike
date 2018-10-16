## disMike

DisMike is a full stack messaging application inspired by the popular team voice chatting and messaging application, Discord. It is build on a Ruby on Rails framework and PostgreSQL backend, using JSON responses passed through to a React and Redux frontend. It features several technologies and libraries.
Like Discord, DisMike features servers that users can create and own. Channels within the servers help maintain different conversations that users may have with each other. Users can also Direct Message each other. Check for the live version [here](www.dismike-herokuapp.com)!

## Instructions

* Create an account or use an existing one such as the Demo account!
* Users can create server which already generate the channel 'general'
* Users can join existing servers using the join form, entering the server ID of the server they wish to join
* Users can enter channels of joined servers and relay messages to each other; can use popularized emojis or enter emojis in text!
* Users can create private conversations with each other through Direct Messaging.
* Users can add/remove friends and view online status of people they met.
* Users in the channel will get live updates of messages

## Technologies Used

* Ruby on Rails for backend framework and functionality
* PostgreSQL for backend database
* JavaScript for User interaction and single page rendering
* HTML for basic web page structuring
* CSS for web page styling

## Library Used

* ActionCable for real time messaging between users in servers and direct messaging -- also helps in effectively sending JSON responses to related users
* Moment for parsing date and time -- helps render correct date and time shown for messages sent
* Paperclip for storing data and images online using AWS -- used for Server and User profile images
* React for virtual DOM and rendering
* React-DOM for quickly and virtually finding DOM element
* Fuse.js for parsing similar text and objects for frontend searching
* React-Autosize-Textarea for automatically resizing textareas appropriately to input size
* React-Emojione/Emoji-Mart for allowing toggling of emoji box and creating unicode version of emoji
* React-twemoji for using Twitter API to convert unicode emoji to Twitter-skinned emojis
* React-easy-emoji for showing converted emojis
* Typed.js for automatic typing of input fields used to login DemoUser.


## To-do
* Landing page
* Context menu clicks on DM's
* Profile modal to show info regarding users -- (mutual servers, friends)
* Unread message counter/Servers showing unread messages
* Loading only certain amount of messages to reduce backend initial fetches -- updates as you scroll up.
* React transitions for more flashy actions


## Future Features
* Hierarchy, creating administrators with different privileges
* Allow server owners to transfer ownership
* Channels with password, allowing only specific users
* Messaging bot? For those lonely users out there.
* User join messages!
* Team Direct Messaging
* Tagging!
* Possible Voice Chatting Options
