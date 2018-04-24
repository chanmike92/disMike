@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id, :img_url
    json.channel_ids server.channels.pluck(:id)
  end
end
