# CDK TypeScript project

## Setup
* `aws configure --profile cdk-user` to setup credentials
* `cdk synth --profile cdk-user` to check if the code compiles the template correctly
* `cdk diff --profile cdk-user` to check the changes that will be applied
* `cdk deploy --profile cdk-user` to deploy the stack

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
