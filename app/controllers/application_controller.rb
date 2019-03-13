class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    before_action :set_user_type
  
    private
  
    def set_user_type
      session[:user_type] = whitelist_params[:user_type] if whitelist_params[:user_type]
      Thread.current[:user_type] = session[:user_type] # keep populated with the most recent type
    def whitelist_params
      params.permit(:user_type)
    end
  end

  class UserTypeModel < ActiveRecord::Base
    self.abstract_class = true

    if(Thread.current[:user_type] == 'patient')
      establish_connection "#{Rails.env}_patient".to_sym
    else
      establish_connection "#{Rails.env}".to_sym
    end
  end