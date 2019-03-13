Rails.application.routes.draw do

  root 'pages#index'
  get 'index' => 'pages#index'
  get 'residential' => 'pages#residential'
  get 'corporate' => 'pages#corporate'
  get 'quote' => 'quotes#new'
  get 'thanks' => 'pages#thanks'
  get 'careers' => 'pages#careers'
  
  resources :quotes
end
