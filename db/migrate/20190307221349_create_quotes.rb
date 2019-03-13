class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.string :Building_Type
      t.string :Product_Grade
      t.integer :Nb_Appartement
      t.integer :Nb_Business
      t.integer :Nb_Floor
      t.integer :Nb_Basement
      t.integer :Nb_Cage
      t.integer :Nb_Parking
      t.integer :Nb_OccupantPerFloor
      t.integer :Nb_OpperatingHour
      t.string  :Final_Price
      t.timestamps
    end
  end
end


