import * as createShopping from '../createShopping';

test('create shopping error response', async () => {

// test error response give wrong request
  const event = {
    "body": "{\"shopname\":\"David Jones\",\"shopaddress\":\"Parramatta\", \"shoplocation\":\"Level5\"}",
    "requestContext": {
          "cognitoIdentityId": "USER-SUB-1234"
      }
  };
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(500);
  };

  await createShopping.main(event, context, callback);
});
