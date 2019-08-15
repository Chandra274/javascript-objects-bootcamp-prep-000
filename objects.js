var playlist = {
  Madonna: 'LikeAVirgin',
  PhilCollins: 'AnotherDayinParadise',
  EltonJohn: 'CircleOfLife',
  MileyCirus: 'WreckingBall'
}

updatePlaylist(playlist, key, value)
{
  playlist[key] = value
}

removeFromPlaylist(playlist, key)
{
  delete playlist.key
}