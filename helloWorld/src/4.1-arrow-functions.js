/* setInterval(function(){
    console.log('The price of', that.symbol, 'is', (Math.random() * 100).toFixed(2))
}, 1000) */

/* function StockQuoteGenerator(symbol){
        this.symbol = symbol;
        console.log(this.symbol);

        setInterval(()=>
            console.log('The price of', this.symbol, 'is', (Math.random() * 100).toFixed(2)), 1000
        )
}

const sqg = new StockQuoteGenerator('IBM') */

const jukebox = {
    songs: [
        {title: 'song a', artist: 'artist a'},
        {title: 'song b', artist: 'artist b'},
    ],
    printSong: function (song) {
        console.log(`${song.artist} - ${song.title}`);
    },
    /* printSongs: function (){
        this.songs.forEach(function (song) {
            this.printSong(song);
        }, bind(this));
    } */
    printSongs: function(){
        this.songs.forEach((song) => this.printSong(song))
    }
}

jukebox.printSongs();