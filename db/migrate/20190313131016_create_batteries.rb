class CreateBatteries < ActiveRecord::Migration[5.2]
  def change
    create_table :batteries do |t|
      t.belongs_to :column
      t.integer :building_id
      t.string :type
      t.string :status
      t.string :employee_id
      t.date :date_of_commissioning
      t.date :last_inspection_date
      t.string :operations_certificate
      t.text :information
      t.text :notes

      t.timestamps
    end
  end
end
