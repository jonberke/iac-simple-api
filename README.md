# About
This repo contains the source code referred to in the [simple API infrastructure as code blog
post](https://blog.OutWithTheOld.info/posts/simple-api-iac/).

Each directory takes a different approach at solving the problem:

* __ecs__: Uses the AWS CDK to build a solution using ECS and Fargate
* __lambda__: Uses the AWS CDK to build a solution using Lambda
* __sam__: Uses AWS SAM to build a solution using Lambda

# Prerequisite
This project requires the following tools to be installed:

* [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_prerequisites)
* [TypeScript](https://www.typescriptlang.org/#installation)
* [Docker](https://docs.docker.com/get-docker/)
* [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
  (Only required if deploying the SAM version)

# Deployment
Each subdirectory (ecs, lambda, sam) has its own self-contained deployment setup. Therefore, to
deploy an infrastructure, change to that infrastructure's subdirectory before running the commands
below.

Additionally, you'll need to run `npm install` in each subdirectory before you can deploy its infrastructure.

## ECS and Lambda

1. `npm run build`
1. `cdk deploy`

## SAM

1. `sam build`
1. `sam deploy --guided`

# Usage
The CloudFormation output from each deploy includes the API URL you can GET to verify the
deployment. You'll see this URL in your terminal window when the deploy completes and it can be
found in the stack's Outputs section in the AWS Console.

# Cleanup

## ECS and Lambda

* Delete the stack from the AWS console or run `cdk destroy`

## SAM

* Delete the stack from the CloudFormation page in AWS Console or run
`aws cloudformation delete-stack --stack-name <stack name>`
