$(document).ready(function() {
	$('.track').text(localStorage.prev_track)
	$('.artist').text(localStorage.prev_artist)
	$(".art").attr("src", localStorage.prev_art);
	$.ajax({
		url: `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=torvim&api_key=b3de0e6994fff89e7f73b61216f290ca&format=json`,
		type: 'GET',
		data: {
			format: 'json'
		},
		success: function(response) {
			var track = response.recenttracks.track[0].name.split('-')[0]
			var artist = response.recenttracks.track[0].artist["#text"]
			var song = (`${track} - ${artist}`)
			var art = response.recenttracks.track[0].image[3]['#text']
			if (art == "") {
				art = localStorage.prev_art
			}
			$('.track').text(track)
			$('.artist').text(artist)
			$(".art").attr("src", art);
			localStorage.prev_track = track
			localStorage.prev_artist = artist
			localStorage.prev_art = art
		},
		error: function() {
			$('#errors').text("There was an error processing your request. Please try again.");
		}
	});
});