class CreateColumns < ActiveRecord::Migration[5.2]
  def change
    create_table :columns do |t|
      t.string :battery_id
      t.string :type
      t.string :floor_number
      t.string :status
      t.string :information
      t.string :notes

      t.timestamps
    end
  end
end
