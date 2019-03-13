#  config/initializers/postgres.rb

POSTGRES = YAML::load(ERB.new(File.read(Rails.root.join("config","postgres.yml"))).result)[Rails.env]
class InterdimensionInvention < ActiveRecord::Base
    establish_connection POSTGRES
  end
  
class Permit < ActiveRecord::Base
    establish_connection POSTGRES
  end  