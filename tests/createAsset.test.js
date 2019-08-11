import * as createAsset from '../createAsset';

test('create asset', async () => {
  const event = {
    "body": "{\"assetname\":\"OhhMedia1\",\"assetwidth\":\"350\",\"assetheight\":\"400\", \"assetstatus\":\"active\", \"shopcenterid\":\"6fefddd0-b8d0-11e9-a85b-1d178f6fb7a2\"}",
      "requestContext": {
        "identity": {
          "cognitoIdentityId": "USER-SUB-1234"
        }
      }
  };
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
  };

  await createAsset.main(event, context, callback);
});
