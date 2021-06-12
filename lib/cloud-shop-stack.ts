import * as cdk from '@aws-cdk/core';
import {Function, Code, Runtime} from "@aws-cdk/aws-lambda";

export class CloudShopStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new Function(this, 'GetProducts', {
      runtime: Runtime.NODEJS_14_X,
      handler: 'getProducts.handler',
      code: Code.fromAsset('dist/catalog/getProducts')
    })
    // The code that defines your stack goes here
  }
}
