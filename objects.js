var playlist = {
  Madonna: 'LikeAVirgin',
  PhilCollins: 'AnotherDayinParadise',
  EltonJohn: 'CircleOfLife',
  MileyCirus: 'WreckingBall'
}

function updatePlaylist(playlist, key, value)
{
  playlist[key] = value
}

function removeFromPlaylist(playlist, key)
{
  delete playlist.key
}