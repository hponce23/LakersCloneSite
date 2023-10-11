var tableData = [
    {
        'date':'TUESDAY, OCTOBER 24',
        'time': '7:30 PM ET',
        'teams': 'Los Angeles Lakers\nDenver Nuggets',
        'arena': 'Ball Arena\nDenver, CO'
    },
    {
        "date":"THURSDAY, OCTOBER 26",
        "time": "10:00 PM ET",
        "teams": "Phoenix Suns\nLos Angeles Lakers",
        "arena": "Crypto.com Arena\nLos Angeles, CA"
    },
    {
        "date":"SUNDAY, OCTOBER 29",
        "time": "9:00 PM ET",
        "teams": "Los Angeles Lakers\nSacramento Kings",
        "arena": "Golden 1 Center\nSacramento, CA"
    },
    {
        "date":"MONDAY, OCTOBER 30",
        "time": "10:30 PM ET",
        "teams": "Orlando Magic\nLos Angeles Lakers",
        "arena": "Crypto.com Arena\nLos Angeles, CA"
    }
]

var tableBody = document.getElementById("scheduleTable");

for(var i = 0; i < tableData.length; i++){
    var dataItem = tableData[i];

    var row = tableBody.insertRow();

    var dateCell = row.insertCell(0);
    dateCell.innerHTML = dataItem.date;

    var timeCell = row.insertCell(1);
    timeCell.innerHTML = dataItem.time;

    var teamsCell = row.insertCell(2);
    teamsCell.innerHTML = dataItem.teams;

    var arenaCell = row.insertCell(3);
    arenaCell.innerHTML = dataItem.arena;

}