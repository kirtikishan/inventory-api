import * as dynamoDbLib from './libs/dynamodb-lib';
import {success, failure} from './libs/response-lib';

export async function main (event, context) {

    const params = {
        TableName: "shoppingcenter",
        // 'KeyConditionExpression' defines the condition for the query
        // - 'centerid = :centerid': only return items with matching 'centerid'
        //   partition key
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':userId': defines 'userId' to be Identity Pool identity id
        //   of the authenticated user
    };
    try {
        const result = await dynamoDbLib.call("scan", params);
        return success(result.Items);
    } catch (e) {
        return failure({ status: false });
      }
}
