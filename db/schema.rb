# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180621184444) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "server_id"
    t.index ["server_id"], name: "index_channels_on_server_id"
  end

  create_table "dmchannels", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dmsubscribers", force: :cascade do |t|
    t.integer "dm_id", null: false
    t.integer "user_id", null: false
    t.boolean "subscribed", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "friend1", null: false
    t.integer "friend2", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend1", "friend2"], name: "index_friendships_on_friend1_and_friend2", unique: true
  end

  create_table "messages", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "messagable_id", null: false
    t.string "messagable_type", null: false
    t.index ["author_id", "messagable_id", "messagable_type"], name: "index_on_user_and_messages"
    t.index ["messagable_id", "messagable_type"], name: "index_messages_on_messagable_id_and_messagable_type"
  end

  create_table "servers", force: :cascade do |t|
    t.string "name", null: false
    t.string "img_url"
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["name"], name: "index_servers_on_name", unique: true
  end

  create_table "serversubscriptions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "server_id"], name: "index_serversubscriptions_on_user_id_and_server_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username", "email"], name: "index_users_on_username_and_email", unique: true
  end

end
