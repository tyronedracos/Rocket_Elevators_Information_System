# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'customers.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = Customer.new
    t.user_id = row['user_id']
    t.company_name = row['company_name']
    t.company_address = row['company_address']
    t.full_name = row['full_name']
    t.phone = row['phone']
    t.email = row['email']
    t.company_description = row['company_description']
    t.full_name_of_service_technical = row['full_name_of_service_technical']
    t.phone_of_service_technical = row['phone_of_service_technical']
    t.email_of_service_technical = row['email_of_service_technical']
    t.password = row['password']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.user_id}, #{t.full_name} saved"
end

puts "There are now #{Customer.count} rows in the transactions table"


require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'addresses.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = Address.new
    t.address_type = row['type']
    t.status = row['status']
    t.entity = row['entity']
    t.street_number_name = row['street_number_name']
    t.apartment_number = row['apartment_number']
    t.city = row['city']
    t.state_province = row['state_province']
    t.zip_code = row['zip_code']
    t.country = row['country']
    t.notes = row['notes']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.street_number_name}, #{t.city} saved"
end

puts "There are now #{Address.count} rows in the transactions table"
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'leads.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = Lead.new
    t.full_name= row['full_name']
    t.email = row['email']
    t.phone = row['phone']
    t.business_name = row['business_name']
    t.project_name = row['project_name']
    t.department = row['department']
    t.project_description = row['project_description']
    t.message = row['message']
    t.file_attachment = row['file_attachment']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.business_name}, #{t.message} saved"
end

puts "There are now #{Lead.count} rows in the transactions table"
require 'csv'
csv_text = File.read(Rails.root.join('lib', 'seeds', 'batteries.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = Battery.new
    t.building_id= row['building_id']
    t.battery_type = row['type']
    t.status = row['status']
    t.employee_id = row['employee_id']
    t.date_of_commissioning = row['date_of_commissioning']
    t.last_inspection_date = row['last_inspection_date']
    t.operations_certificate = row['operations_certificate']
    t.information = row['information']
    t.notes = row['notes']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.date_of_commissioning}, #{t.information} saved"
end

puts "There are now #{Battery.count} rows in the transactions table"

require 'csv'
csv_text = File.read(Rails.root.join('lib', 'seeds', 'buildings.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = Building.new
    t.customer_id= row['customer_id']
    t.building_address = row['building_address']
    t.building_administrator_full_name = row['building_administrator_full_name']
    t.building_administrator_email = row['building_administrator_email']
    t.building_administrator_phone = row['building_administrator_phone']
    t.building_technical_contact_name = row['building_technical_contact_name']
    t.building_technical_contact_email = row['building_technical_contact_email']
    t.building_technical_contact_phone = row['building_technical_contact_phone']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.customer_id}, #{t.building_administrator_full_name} saved"
end

puts "There are now #{Building.count} rows in the transactions table"
require 'csv'
csv_text = File.read(Rails.root.join('lib', 'seeds', 'columns.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = Column.new
    t.battery_id= row['battery_id']
    t.column_type = row['type']
    t.floor_number = row['floor_number']
    t.status = row['status']
    t.information = row['building_administrator_phone']
    t.notes = row['building_technical_contact_name']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.battery_id}, #{t.status} saved"
end

puts "There are now #{Column.count} rows in the transactions table"

require 'csv'
csv_text = File.read(Rails.root.join('lib', 'seeds', 'elevators.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = Elevator.new
    t.column_id= row['column_id']
    t.serial_number = row['serial_number']
    t.elevator_class = row['elevator_class']
    t.elevator_type = row['type']
    t.status = row['status']
    t.date_of_commissioning = row['date_of_commissioning']
    t.date_of_last_inspection = row['date_of_last_inspection']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.column_id}, #{t.elevator_class} saved"
end

puts "There are now #{Elevator.count} rows in the transactions table"

require 'csv'
csv_text = File.read(Rails.root.join('lib', 'seeds', 'building_details.csv'))
csv = CSV.parse(csv_text, col_sep: ",", :headers => true)
csv.each do |row|
    
    row = row.to_hash
    p row
    t = BuildingDetail.new
    t.building_id= row['building_id']
    t.information_key = row['information_key']
    t.value = row['value']
    t.created_at = row['created_at']
    t.updated_at = row['updated_at']
    t.save

    puts "#{t.building_id}, #{t.value} saved"
end

puts "There are now #{BuildingDetail.count} rows in the transactions table"

