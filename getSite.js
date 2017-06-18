require('dotenv').load({ silent: true });
const Webflow = require('webflow-api');
const webflow = new Webflow({ token: process.env.WEBFLOW_SANDBOX_TOKEN });

webflow.sites()
.then(allSites => webflow.sites({ sideId: `${allSites[0]._id}` }))
.then(s => console.log(JSON.stringify(s, null, 2)));
/*
[
  {
    "_id": "5945589bd4c908089df24bfa",
    "createdOn": "2017-06-17T16:28:11.483Z",
    "name": "React Component Sandbox",
    "shortName": "react-component-sandbox"

  }
]
*/
