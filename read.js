//var AWS = require("aws-sdk");
let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIAI2T4DJFZRIASSK7A", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "Tests",
        Key: {
            "SampleID": "5966786"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("Tests::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
                    var tr;
                    var actualData=data.Item;
                        tr = $('<tr/>');
                        tr.append("<td>" + actualData.SampleID + "</td>");
                        tr.append("<td>" + actualData.PatientName + "</td>");
                        tr.append("<td>" + actualData.Tests + "</td>");
                        tr.append("<td>" + actualData.result + "</td>");
                        $('table').append(tr);
                console.log(data.Item);
        }
    })
}
var analyzer={};
analyzer.refreshButtonHtml=document.getElementById('refresh');
analyzer.refreshButtonHtml.addEventListener('click',fetchOneByKey);
fetchOneByKey(); 
