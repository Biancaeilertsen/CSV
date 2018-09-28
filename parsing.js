
function upload(e) {
    var data = null;
    var file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csvData = event.target.result;

        var parsedCSV = d3.csv.parseRows(csvData);

        parsedCSV.forEach(function (d, i) {
            if (i == 0) return true; // skip the header
            document.getElementById(d[0]).value = d[1];
        });
    }
}

function parser(){
    var link = document.getElementById("url").value;
       d3.csv(link, function(data){
        console.log(data);
    });
}


function parseURL() {
    
    var data;
    var link = document.getElementById("url").value;
    $.ajax({
      type: "GET",  
      async: true,
      url: link,
      dataType: "text",
      crossDomain: true,       
      success: function(response) {
        data = $.csv.toArrays(response);
        console.log(data);
      }   
    }); 
}   







