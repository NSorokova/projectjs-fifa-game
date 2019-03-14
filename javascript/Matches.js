
Ajax.get("http://worldcup.sfg.io/matches", (data) => {
    matches = data;
    Tracker.trackItems.push("Rendered matches info!");
    matches.map((match) => {
        document.getElementById('matches').append(JSON.stringify(match));
        document.getElementById('matches').innerHTML += '<br>'
    })
});




