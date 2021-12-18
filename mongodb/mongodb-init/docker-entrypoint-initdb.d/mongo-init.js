db = db.getSiblingDB('sample-db');

db.createCollection('sample');

db.sample.insertMany(
    [{
        "sampleID": "1234",
        "dateBegin": ISODate("2021-04-24T00:00:00Z"),
        "dateEnd": ISODate("2021-05-25T00:00:00Z")
    }]
)