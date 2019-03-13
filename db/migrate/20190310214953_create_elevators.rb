class CreateElevators < ActiveRecord::Migration[5.2]
  def change
    create_table :elevators do |t|
      t.string :column_id
      t.string :serial_number
      t.string :elevator_class
      t.string :type
      t.string :status
      t.date :date_of_commissioning
      t.date :date_of_last_inspection
      t.string :inspection_certificate
      t.string :information
      t.string :notes

      t.timestamps
    end
  end
end
