import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {

    const params = {
        TableName: "shoppingcenter",
        // 'Key' defines the partition key and sort key of the item to be removed
        // - 'centerid': path parameter
        Key: {
            centerid: event.pathParameters.id
        }
      };

      try {
        const result = await dynamoDbLib.call("delete", params);
        return success({ status: true, result:result });
      } catch (e) {
        return failure({ status: false });
      }
}
