class User < ApplicationRecord
    validates :Name, presence: true
    validates :LastName, presence: true
    validates :Email, presence: true
    validates :Password, presence: true
end
