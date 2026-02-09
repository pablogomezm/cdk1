# CDK TypeScript project

This project uses pnpm instead of npm.

## Setup credentials

- Have an IAM user with programmatic access, get the access key and secret access key
- `aws configure --profile cdk-user` to configure the aws profile with the access key and secret access key
- `export AWS_PROFILE=cdk-user` to set the profile for the current terminal session

## Useful commands

- `pnpm run build` compile typescript to js
- `pnpm run watch` watch for changes and compile
- `pnpm run test` perform the jest unit tests
- `pnpm cdk bootstrap` setup the environment to deploy CDK apps (only once per account/region)
- `pnpm cdk diff` compare deployed stack with current state
- `pnpm cdk synth` emits the synthesized CloudFormation template
- `pnpm cdk deploy` deploy this stack to your default AWS account/region
