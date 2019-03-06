class CreateUsers < ActiveRecord::Migration[5.2]
  def change

    create_table :users do |t|

      t.string :Name
      t.string :LastName
      t.string :Roles
      t.string :Email
      t.string :Password

      t.timestamps
    end
  end
end
