namespace :db do
  desc "Run db migrations for additional database"
  task migrate: :environment do
    # Invoking rake db:migrate executes against the usual/default db
    # first, then this gets executed.

    puts 'Patient migration'
    ActiveRecord::Base.establish_connection "#{Rails.env}_patient".to_sym
    ActiveRecord::Migrator.migrate('db/migrate')
  end
end
