The API services are created using ServerlessFramework. Lambda is used to write the services and DynamoDb is used to store/ persist your data. All the API's are secured and users can only access if they are set up in the pool using AWS CognitoIdentity.

I have created two EndPoints one for /assets and other is /shop.

Below are the api end points: 

In the below API:

Api Gateway: deployed in region us-east1: https://n7gqnawcrg.execute-api.us-east-1
ENV: prod (Just used as a sample stage variable)
EndPoints: /assets, /shop.

  POST - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/shop
  GET - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/shop
  PUT - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/shop/{id}
  DELETE - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/shop/{id}
  POST - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/assets
  GET - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/assets/{id}
  GET - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/assets
  PUT - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/assets/{id}
  DELETE - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/assets/{id}
  POST - https://n7gqnawcrg.execute-api.us-east-1.amazonaws.com/prod/assets/search

Since it is a AWS Cloud based service you need an IAM account to test the services. In order to test the service you can use aws-api-gateway-cli-test package. The way to test your api using this package is :

Example: 
npx aws-api-gateway-cli-test  \
  --username='johndoe' \
  --password='password' \
  --user-pool-id='us-east-1_Xxxxxxxx' \
  --app-client-id='29xxyyxxyxxxyyxxxyy' \
  --cognito-region='us-east-1' \
  --identity-pool-id='us-east-1:99xxyyx-9999-9999-xx0x-99xxxxxxxx' \
  --invoke-url='https://99xxxxxxx.execute-api.us-east-1.amazonaws.com' \
  --api-gateway-region='us-east-1' \
  --api-key='x3xaacea33DCDA3aqafae28aCdaeEWXX1ada3acx' \
  --path-template='/users' \
  --method='GET' \
  --params='{}' \
  --additional-params='{}' \
  --access-token-header='cognito-access-token' \
  --body='{}'
If you have setup locally to test your mock you can use below functions through CLI:

serverless invoke local --function  listShop --path mocks/list-event.json
serverless invoke local --function  createShopping --path mocks/create-event.json
serverless invoke local --function  updateShop --path mocks/update-event.json
serverless invoke local --function  createAsset --path mocks/create-event-asset.json
serverless invoke local --function  listAsset --path mocks/get-event-asset.json
serverless invoke local --function  updateAsset --path mocks/update-event-asset.json
serverless invoke local --function  deleteShop --path mocks/delete-event.json
serverless invoke local --function  deleteAsset --path mocks/delete-event-asset.json
serverless invoke local --function  getAsset --path mocks/get-asset-id.json
serverless invoke local --function  searchAsset --path mocks/search-asset-id.json


