import * as cdk from '@aws-cdk/core';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 accessing environment variables
    console.log('REGION 👉', process.env.REGION);
    console.log('DEPLOYMENT_ENV 👉', process.env.DEPLOYMENT_ENV);
  }
}
