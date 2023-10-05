// music should be an object with title, artist, and album properties
const music = {
  title: "The Last Goodbye"
  artist: "Odesza"
  album: "Odesza"

};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `${music.title} by ${music.artist} from the album ${music.album} is currently playing`;

console.log(songSnippet)


`${music.title} is a song by ${music.artist} on the album ${music.album}.`