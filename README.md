# AnalyzerAPI
This analyzer is a plug-in stick that replaces the need of a traditional computer to interface medical equipments. The microcontroller is equipped with wifi and has an onboard serial port that plugs into any medical instrument. The data is captured and pushed to the cloud where further computation takes place.
This program can be uploaded on any ESP based microcontroller. On the server side, it uses services from AWS like DynamoDB(NoSQL), AWS IOT and AWS Lambda to analyze the data and extract all the information from the ASTM, HL7 encoded format. 
