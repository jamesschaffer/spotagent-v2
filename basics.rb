require 'rubygems'
require 'sinatra'
require 'compass'

configure do
  disable :logging
  set :public_folder, 'public'
end

get '/' do
	erb :layout
end