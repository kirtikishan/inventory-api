import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "assets",
    Item: {
      userid: event.requestContext.identity.cognitoIdentityId,
      assetid: uuid.v1(),
      assetname: data.assetname,
      assetwidth: data.assetwidth,
      assetheight: data.assetheight,
      assetstatus: data.assetstatus,
      shopcenterid: data.shopcenterid
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
