class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.string :question
      t.boolean :correctnes
      t.integer :count

      t.timestamps
    end
  end
end
