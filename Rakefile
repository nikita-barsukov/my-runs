desc "Download CSV of GPS ponts and workouts to tmp folder"
task :get_db_dump do
  wouts = 'https://onedrive.live.com/download?cid=DEA0FF33116BE269&resid=DEA0FF33116BE269%211551&authkey=AMD1ngo89bCy95k'
  data = 'https://onedrive.live.com/download?cid=DEA0FF33116BE269&resid=DEA0FF33116BE269%211552&authkey=ADlDIbXXHHh8mkQ'

  `wget -O tmp/workouts.csv '#{wouts}'`
  `wget  -O tmp/points.csv '#{data}'`
end
