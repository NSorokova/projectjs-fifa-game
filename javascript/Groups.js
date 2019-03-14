let container = document.getElementById("groups");

let groups;

    Ajax.get("http://worldcup.sfg.io/teams/group_results", (data) => {
       groups = data; 
       renderGroups();
    });

var renderGroups =() => 
{
    
    groups.map((group)=>{

        var domLabel = document.createElement("label");

        domLabel.append("Group " + group.letter);
        container.appendChild(domLabel);

        var domTable = document.createElement("table");
        container.appendChild(domTable);
        domTable.innerHTML = '<th>Country</th>'+'<th>Wins</th>'+'<th>Losses</th>'+'<th>Draws</th>'+'<th>Points</th>'+'<th>Games Count</th>'+'<th>Goals for</th>'+'<th>Goals againts</th>';
       
        group.ordered_teams.map ((oi)=>
        {
            
            var domTr = document.createElement("tr");
            domTable.appendChild(domTr);
            domTr.innerHTML += '<td>'+oi.country       +'</td>'
            domTr.innerHTML += '<td>'+oi.wins          +'</td>' 
            domTr.innerHTML += '<td>'+oi.losses        +'</td>' 
            domTr.innerHTML += '<td>'+oi.draws         +'</td>' 
            domTr.innerHTML += '<td>'+oi.points        +'</td>' 
            domTr.innerHTML += '<td>'+oi.games_played  +'</td>' 
            domTr.innerHTML += '<td>'+oi.goals_for     +'</td>' 
            domTr.innerHTML += '<td>'+oi.goals_against +'</td>' 
            domTable.appendChild(domTr);
        })
    });
}