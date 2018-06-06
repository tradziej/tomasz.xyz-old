const config = require('./config');
const simpledb = require('aws-sdk/clients/simpledb');

const sdb = new simpledb({
  region: process.env.AWS_REGION,
  endpoint: 'https://sdb.amazonaws.com',
});

sdb.getAttributes({
  DomainName: process.env.SDB_DOMAIN,
  ItemName: 'spotify',
}, function (err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp.Attributes);
  }
});