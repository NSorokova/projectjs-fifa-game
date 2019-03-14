let teamsData = null;

(()=> {
    Ajax.get("http://worldcup.sfg.io/teams/", (data) => {
        teamsData = data;
        renderHtml();
    });  
    Ajax.get("http://worldcup.sfg.io/teams/group_results", (data) => {
        group_resultsData = data;
    });
})();


var renderHtml =()=> {
    teamsData.map((data)=>{
        var domTr = document.createElement("tr");
        document.getElementById("Teams").appendChild(domTr);
        var domTd = document.createElement("td");
        var domTdCode = document.createElement("td");
        domTr.appendChild(domTd);
        domTr.appendChild(domTdCode);
        domTd.append(data.country);
        domTdCode.append(data.fifa_code);
        generateScores(data.id, data.group_letter, domTr);

    });

};

var  generateScores = (id, letter, domTr) =>  {
    group_resultsData.map((groupRes) => {
        if (groupResLetter.letter === letter) {
            groupRes.ordered_teams.map((oi)=>{
                if(oi.id == id )
                {
                    domTr.appendChild(document.createElement('td'))
                }
            })
        }
    })
};
