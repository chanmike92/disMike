

@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id, :img_url, :is_dm
    json.channel_ids server.channels.pluck(:id)
  end
end
