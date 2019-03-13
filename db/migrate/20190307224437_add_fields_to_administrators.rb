class AddFieldsToAdministrators < ActiveRecord::Migration[5.2]
  def change
    add_column :administrators, :title, :string
  end
end
