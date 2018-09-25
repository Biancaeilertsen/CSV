

document.getElementById("file").addEventListener(upload, false);

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




document.getElementById("submiturl").addEventListener("click", parseURL);

function parseURL() {

    var link = document.getElementById("url").innerHTML;
    d3.ajax({
        url: link,
        success: function (data) {
            var arr = d3.csvtoArray(data);
            oncomplete(arr);
        },
        dataType: "text",
        });

        oncomplete: function (arr) {
            for (i=0; i<items.length; i++) {
            document.writeln(arr[i]);
            }
        }
}