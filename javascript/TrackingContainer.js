

class Tracker {
    static trackItems = [];
}
(()=>{
    setInterval(()=>{
        localStorage.setItem('trackItems', JSON.stringify(Tracker.trackItems))
        Tracker.trackItems = localStorage.getItem('trackItems')
    },500)
})