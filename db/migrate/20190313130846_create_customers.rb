class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.belongs_to :address
      t.integer :user_id
      t.string :company_name
      t.string :company_address
      t.string :full_name
      t.string :phone
      t.string :email
      t.string :company_description
      t.string :full_name_of_service_technical
      t.string :phone_of_service_technical
      t.string :email_of_service_technical
      t.string :password

      t.timestamps
    end
  end
end
