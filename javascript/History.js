
let button = document.getElementById("render");


(()=>{

    Tracker.trackItems.map((tr)=>{
        var domTr = document.createElement("tr");
        document.getElementById("table").appendChild(domTr);
        
        var tdHistory = document.createElement("td");
        domTdHistory.append(tr);
        domTr.appendChild(tdHistory);

        var tdHistoryDate = document.createElement("td");
        tdHistoryDate.append(date.toDateString());
        domTr.appendChild(tdHistoryDate);
    })

})();