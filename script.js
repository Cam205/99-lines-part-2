function singSong() {

    let friends = ['Kj', 'Will', 'Davion', 'Cartier', 'Jamal'];

    for (f = 0; f < friends.length; f++) {
        let songContainer = document.getElementById("song-container")
        let eachFriend = document.createElement('div') //Created div
        eachFriend.className = 'myFriends' //Give div a class name
        songContainer.appendChild(eachFriend)

        let friendNames = document.createElement('h3')
        eachFriend.appendChild(friendNames)

        friendNames.innerHTML = (friends[f]);

        let friend = friends[f];
        //console.log(friends[f] + ":")
        for (s = 99; s > 0; s--) {
            let lyrics = document.createElement('p')
            friendNames.appendChild(lyrics)

            let minusOne = s - 1;
            if (s > 1) {
                lyrics.innerHTML = (s + " lines of code in the file, " + s + " lines of code, " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file");
            } else {
                lyrics.innerHTML = ("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }

    }
};
