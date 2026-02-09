#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { Cdk1Stack } from '../lib/cdk1-stack';

const app = new cdk.App();
new Cdk1Stack(app, 'Cdk1Stack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
