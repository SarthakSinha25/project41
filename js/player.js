class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score = 0;
          // create the property for the score and intialize with zero
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

     getScorePlayer1() {
        var pointRef = database.ref('players/player1/score');
        pointRef.on("value", (data) => {
            this.score = data.val();
        })
     }

     getScorePlayer2() {
        var pointRef2 = database.ref('players/player2/score');
        pointRef2.on("value", (data) => {
            this.score = data.val();
        })
     }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    // updateScore(result) {
    //     database.ref('players/player1').update({
    //         score: result
    //     });
    // }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
