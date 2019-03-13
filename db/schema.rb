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

ActiveRecord::Schema.define(version: 2019_03_13_153902) do

  create_table "addresses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "address_type"
    t.string "status"
    t.string "entity"
    t.string "street_number_name"
    t.string "apartment_number"
    t.string "city"
    t.string "state_province"
    t.string "zip_code"
    t.string "country"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "administrators", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "remember_token"
    t.datetime "remember_token_expires_at"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "batteries", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "column_id"
    t.integer "building_id"
    t.string "battery_type"
    t.string "status"
    t.integer "employee_id"
    t.date "date_of_commissioning"
    t.date "last_inspection_date"
    t.string "operations_certificate"
    t.text "information"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["column_id"], name: "index_batteries_on_column_id"
  end

  create_table "building_details", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "building_id"
    t.string "information_key"
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["building_id"], name: "index_building_details_on_building_id"
  end

  create_table "buildings", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "address_id"
    t.bigint "battery_id"
    t.integer "customer_id"
    t.string "building_address"
    t.string "building_administrator_full_name"
    t.string "building_administrator_email"
    t.string "building_administrator_phone"
    t.string "building_technical_contact_name"
    t.string "building_technical_contact_email"
    t.string "building_technical_contact_phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_buildings_on_address_id"
    t.index ["battery_id"], name: "index_buildings_on_battery_id"
  end

  create_table "columns", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "elevator_id"
    t.string "battery_id"
    t.string "column_type"
    t.string "floor_number"
    t.string "status"
    t.text "information"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["elevator_id"], name: "index_columns_on_elevator_id"
  end

  create_table "customers", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "address_id"
    t.integer "user_id"
    t.string "company_name"
    t.string "company_address"
    t.string "full_name"
    t.string "phone"
    t.string "email"
    t.string "company_description"
    t.string "full_name_of_service_technical"
    t.string "phone_of_service_technical"
    t.string "email_of_service_technical"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_customers_on_address_id"
  end

  create_table "elevators", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "column_id"
    t.string "serial_number"
    t.string "elevator_class"
    t.string "elevator_type"
    t.string "status"
    t.date "date_of_commissioning"
    t.date "date_of_last_inspection"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leads", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "full_name"
    t.string "email"
    t.string "phone"
    t.string "business_name"
    t.string "project_name"
    t.string "department"
    t.text "project_description"
    t.text "message"
    t.binary "file_attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quotes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "Building_Type"
    t.string "Product_Grade"
    t.integer "Nb_Appartement"
    t.integer "Nb_Business"
    t.integer "Nb_Floor"
    t.integer "Nb_Basement"
    t.integer "Nb_Cage"
    t.integer "Nb_Parking"
    t.integer "Nb_OccupantPerFloor"
    t.integer "Nb_OpperatingHour"
    t.string "Final_Price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
