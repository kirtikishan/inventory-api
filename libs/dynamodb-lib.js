import AWS from "aws-sdk";
//The AWS JS SDK assumes the region based on the current region of the Lambda function.
//So if your DynamoDB table is in a different region, make sure to set it by calling
//AWS.config.update({ region: "my-region" }); before initilizing the DynamoDB client.

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
}
