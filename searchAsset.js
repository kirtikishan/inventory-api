import * as dynamoDbLib from './libs/dynamodb-lib';
import {success, failure} from './libs/response-lib';

export async function main (event, context) {
    const data = JSON.parse(event.body);
    let params = null;
    if(data.assetname=="NA" && data.shopcenterid=="NA") {
        params = {
            TableName: "assets",
            // 'Key' defines the partition key and sort key of the item to be retrieved
            // - 'userId': Identity Pool identity id of the authenticated user
            // - 'noteId': path parameter

            Key: {
                userid: event.requestContext.identity.cognitoIdentityId,
            }
        };

    } else if(data.assetname=="NA" && data.shopcenterid!="NA") {
        params = {
            TableName: "assets",
            FilterExpression:'userid =:userid AND shopcenterid =:shopcenterid',
            ExpressionAttributeValues: {
                ":userid": event.requestContext.identity.cognitoIdentityId,
                ":shopcenterid": data.shopcenterid
                }
        };
    } else if(data.assetname!="NA" && data.shopcenterid=="NA") {
        params = {
            TableName: "assets",
            FilterExpression:'userid =:userid AND assetname = :assetname',
            ExpressionAttributeValues: {
                ":userid": event.requestContext.identity.cognitoIdentityId,
                ":assetname": data.assetname
                }
        };
    }

    try {
        const result = await dynamoDbLib.call("scan", params);
        return success(result);
    } catch(e) {
        console.log('event', e);
        return failure({status: false});
    }
}