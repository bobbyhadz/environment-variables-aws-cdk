#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import {MyCdkStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();
new MyCdkStack(app, `my-cdk-stack-${process.env.DEPLOYMENT_ENV || ''}`, {
  stackName: `my-cdk-stack-${process.env.DEPLOYMENT_ENV || ''}`,
  env: {
    region: process.env.REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
