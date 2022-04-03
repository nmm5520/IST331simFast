
var tableData = [
    {
        "tic": "001",
        "callsign": "N6701S",
        "type": "B350",
        "fixpair": "RBV,VCN",
        "sp1": "VCN",
        "pos": "1V",
        "ade": "E",
        "time": "00:02:32",
        "ifr": "ifr",
        "etgInstruction": "A090H195",
        "time(sec)": "152"
    },
    {
        "tic": "002",
        "callsign": "N8502F",
        "type": "C421",
        "fixpair": "RBV,VCN",
        "sp1": "VCN",
        "pos": "1V",
        "ade": "E",
        "time": "00:07:15",
        "ifr": "ifr",
        "etgInstruction": "A090H195",
        "time(sec)": "435"
    }
]


buildTable(tableData)


function buildTable(data){
    var table = document.getElementById("myTable")

    for (var i=0; i<data.length; i++) {
        var row = `<tr>
                        <td>${data[i].tic}</td>
                        <td>${data[i].ade}</td>
                        <td>${data[i].callsign}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].fixpair}</td>
                </tr>`
        
        table.innerHTML += row       
    }
}