Rails.application.routes.draw do

  root 'pages#index'
  get 'index' => 'pages#index'
  get 'residential' => 'pages#residential'
  get 'corporate' => 'pages#corporate'
  get 'quote' => 'pages#quote'
  get 'thanks' => 'pages#thanks'
  get 'login' => 'pages#login'

end
