# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
Serversubscription.destroy_all
Channel.destroy_all
Friendship.destroy_all
Dmchannel.destroy_all
Dmsubscriber.destroy_all
Message.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

User.create(username: 'demoUser', password: 'asdfasdf', email: 'demoEmail@demo.com', online_status: false)
User.create(username: 'Lucio', password: 'asdfasdf', email: 'Lucio@demo.com', online_status: false)
User.create(username: 'Tracer', password: 'asdfasdf', email: 'Tracer@demo.com', online_status: false)
User.create(username: 'Reaper', password: 'asdfasdf', email: 'Reaper@demo.com', online_status: false)
User.create(username: 'Mercy', password: 'asdfasdf', email: 'Mercy@demo.com', online_status: false)
User.create(username: 'Genji', password: 'asdfasdf', email: 'Genji@demo.com', online_status: false)
User.create(username: 'Hanzo', password: 'asdfasdf', email: 'Hanzo@demo.com', online_status: false)

Server.create(name: 'Overwatch', owner_id: 1)
Server.create(name: 'Pokemon', owner_id: 1)
Server.create(name: 'Kingdom Hearts', owner_id: 2)
Server.create(name: 'Assassin Creed', owner_id: 3)

Serversubscription.create(user_id: 1, server_id: 1)
Serversubscription.create(user_id: 2, server_id: 1)
Serversubscription.create(user_id: 3, server_id: 1)
Serversubscription.create(user_id: 4, server_id: 1)
Serversubscription.create(user_id: 5, server_id: 1)
Serversubscription.create(user_id: 6, server_id: 1)
Serversubscription.create(user_id: 7, server_id: 1)
Serversubscription.create(user_id: 2, server_id: 2)
Serversubscription.create(user_id: 1, server_id: 2)
Serversubscription.create(user_id: 3, server_id: 2)
Serversubscription.create(user_id: 4, server_id: 2)
Serversubscription.create(user_id: 7, server_id: 2)
Serversubscription.create(user_id: 1, server_id: 3)
Serversubscription.create(user_id: 2, server_id: 3)
Serversubscription.create(user_id: 4, server_id: 3)
Serversubscription.create(user_id: 6, server_id: 3)
Serversubscription.create(user_id: 7, server_id: 3)
Serversubscription.create(user_id: 1, server_id: 4)
Serversubscription.create(user_id: 3, server_id: 4)
Serversubscription.create(user_id: 5, server_id: 4)
Serversubscription.create(user_id: 6, server_id: 4)
Serversubscription.create(user_id: 7, server_id: 4)

Channel.create(name: 'Blackwatch', server_id: 1)
Channel.create(name: "Doomfist's Room", server_id: 1)
Channel.create(name: 'Pallet Town', server_id: 2)
Channel.create(name: "Viridian Forest", server_id: 2)
Channel.create(name: 'Pewter City', server_id: 2)
Channel.create(name: "Cinnabar Island", server_id: 2)
Channel.create(name: 'Agrabah', server_id: 3)
Channel.create(name: "Castle Oblivion", server_id: 3)
Channel.create(name: 'Neverland', server_id: 3)
Channel.create(name: "Destiny Island", server_id: 3)
Channel.create(name: 'New York', server_id: 4)
Channel.create(name: "Florence", server_id: 4)
Channel.create(name: 'Grand Temple', server_id: 4)
Channel.create(name: "Masyaf", server_id: 4)

Friendship.create(friend1: 1, friend2: 2, friendship_status: "PENDING ACCEPT")
Friendship.create(friend1: 1, friend2: 3, friendship_status: "PENDING RECEIVE")
Friendship.create(friend1: 1, friend2: 4, friendship_status: "ACCEPTED")
Friendship.create(friend1: 1, friend2: 5, friendship_status: "ACCEPTED")
Friendship.create(friend1: 2, friend2: 1, friendship_status: "PENDING RECEIVE")
Friendship.create(friend1: 2, friend2: 3, friendship_status: "ACCEPTED")
Friendship.create(friend1: 2, friend2: 4, friendship_status: "ACCEPTED")
Friendship.create(friend1: 3, friend2: 1, friendship_status: "PENDING ACCEPT")
Friendship.create(friend1: 3, friend2: 2, friendship_status: "ACCEPTED")
Friendship.create(friend1: 4, friend2: 1, friendship_status: "ACCEPTED")
Friendship.create(friend1: 4, friend2: 2, friendship_status: "ACCEPTED")

Message.create(body: "First Message", author_id: 1, messagable_id: 1, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 2, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 3, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 4, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 5, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 6, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 7, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 8, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 9, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 10, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 14, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 11, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 12, messagable_type: "Channel")
Message.create(body: "First Message", author_id: 1, messagable_id: 13, messagable_type: "Channel")
Message.create(body: "Second!", author_id: 2, messagable_id: 1, messagable_type: "Channel")
Message.create(body: "Me third", author_id: 3, messagable_id: 1, messagable_type: "Channel")

Dmchannel.create()
Dmchannel.create()
Dmchannel.create()

Dmsubscriber.create(dm_id: 1, user_id: 1, subscribed: true)
Dmsubscriber.create(dm_id: 1, user_id: 2, subscribed: true)
Dmsubscriber.create(dm_id: 1, user_id: 3, subscribed: true)
Dmsubscriber.create(dm_id: 2, user_id: 1, subscribed: true)
Dmsubscriber.create(dm_id: 2, user_id: 3, subscribed: true)
Dmsubscriber.create(dm_id: 2, user_id: 5, subscribed: true)
Dmsubscriber.create(dm_id: 3, user_id: 1, subscribed: true)
Dmsubscriber.create(dm_id: 3, user_id: 7, subscribed: true)
