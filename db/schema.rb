# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_30_020956) do

  create_table "characters", force: :cascade do |t|
    t.integer "world_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "region_id"
    t.text "events"
    t.text "heart"
    t.boolean "heart_tutorial_complete", default: false, null: false
    t.integer "hope_sparks", default: 0, null: false
    t.integer "love_sparks", default: 0, null: false
    t.integer "purpose_sparks", default: 0, null: false
    t.integer "change_sparks", default: 0, null: false
    t.index ["region_id"], name: "index_characters_on_region_id"
    t.index ["user_id"], name: "index_characters_on_user_id"
    t.index ["world_id"], name: "index_characters_on_world_id"
  end

  create_table "paths", force: :cascade do |t|
    t.integer "source_id"
    t.integer "destination_id"
    t.integer "world_id"
    t.string "name_one"
    t.string "name_two"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "custom_travel_message"
    t.index ["destination_id"], name: "index_paths_on_destination_id"
    t.index ["source_id"], name: "index_paths_on_source_id"
    t.index ["world_id"], name: "index_paths_on_world_id"
  end

  create_table "regions", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "world_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "book"
    t.integer "current_page_number", default: 0, null: false
    t.text "activity_modifiers"
    t.index ["world_id"], name: "index_regions_on_world_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "worlds", force: :cascade do |t|
    t.integer "turn"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_worlds_on_user_id"
  end

  add_foreign_key "characters", "users"
  add_foreign_key "characters", "worlds"
  add_foreign_key "paths", "regions", column: "destination_id"
  add_foreign_key "paths", "regions", column: "source_id"
  add_foreign_key "worlds", "users"
end
