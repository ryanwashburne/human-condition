# Human Condition Magazine

[humanconditionmag.com](https://humanconditionmag.com)


## Getting Started
```
git clone https://github.com/ryanwashburne/hc-v3
cd ./hc-v3
yarn
yarn start
```

## IMPORTANT
```.contentful.json``` file is needed at the base directory in order to scrape data from Contentful.

ex:
```
{
  "development":{  
     "host": "preview.contentful.com",
     "spaceId": "SPACE_ID",
     "accessToken": "DEV_ACCESS_TOKEN",
     "managementToken": "<OPTIONAL> MANAGEMENT_ACCESS_TOKEN"
  },
  "production": {  
    "spaceId": "SPACE_ID",
    "accessToken": "PROD_ACCESS_TOKEN",
    "managementToken": "<OPTIONAL> MANAGEMENT_ACCESS_TOKEN"
  }
}
```