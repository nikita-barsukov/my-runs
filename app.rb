require 'sinatra'
require 'data_mapper'
require 'json'

DataMapper.setup(:default, ENV['DATABASE_URL'] ||  "postgres://postgres@localhost/runs")

class Workout
  include DataMapper::Resource
  property :id, Serial
  property :date, DateTime
  property :distance, Numeric
  property :wind_speed, Integer
  property :temparature, Integer
  property :duration, Integer
  has n, :points
end

class Point
  include DataMapper::Resource
  property :id, Serial
  property :workout_id, Integer
  property :lon, Numeric
  property :lat, Numeric
  property :distance, Numeric
  property :duration, Integer
  property :speed, Numeric
  property :alt, Numeric
  belongs_to :workout
end
DataMapper.finalize


get '/workout/:id' do |id|
  content_type :json
  geojson = repository(:default).adapter.select('SELECT to_char(workouts.distance, \'FM99.999\') as distance,
       to_char(workouts.distance/(workouts.duration/3600.0), \'FM99.999\') AS avg_speed,
       workouts.id,
       st_asgeojson(St_MakeLine(geo_points.geom)) AS geojson
FROM workouts
INNER JOIN geo_points ON geo_points.workout_id = workouts.id
GROUP BY workouts.id,
         workouts.distance,
         workouts.duration
HAVING workouts.id = ?;', id)
 Hash[geojson[0].each_pair.to_a].to_json
end

get '/' do
  erb :runs
end


