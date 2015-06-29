DROP TABLE IF EXISTS workouts;
CREATE TABLE workouts
(
  id serial NOT NULL PRIMARY KEY,
  date date,
  distance numeric,
  wind_speed integer,
  temperature integer,
  duration integer
);

DROP TABLE IF EXISTS points;
CREATE TABLE points
(
  id SERIAL NOT NULL PRIMARY KEY,
  workout_id INTEGER,
  lon NUMERIC,
  lat NUMERIC,
  distance NUMERIC,
  duration INTEGER,
  speed NUMERIC,
  alt NUMERIC
);

COPY workouts from '/home/nikita/Documents/repos/my-runs/tmp/workouts.csv' DELIMITER ',' HEADER CSV;
COPY points (workout_id,lon,lat,distance,duration,speed,alt) from '/home/nikita/Documents/repos/my-runs/tmp/points.csv'  DELIMITER ',' HEADER CSV;

