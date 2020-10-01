import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import { LambdaProxyIntegration, HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2'

export class IacLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'handler', {
      code: lambda.Code.fromAsset('src/'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_12_X
    })

    const api = new HttpApi(this, 'iac-api-lambda')
    api.addRoutes({
      methods: [ HttpMethod.GET ],
      path: '/',
      integration: new LambdaProxyIntegration({ handler })
    })

    new cdk.CfnOutput(this, 'apiUrl', {
      value: `https://${api.httpApiId}.execute-api.${cdk.Aws.REGION}.amazonaws.com/`
    })
  }
}
