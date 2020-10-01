import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs'
import { ApplicationLoadBalancedFargateService } from '@aws-cdk/aws-ecs-patterns'
import * as ec2 from '@aws-cdk/aws-ec2'

export class IacEcsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cluster = new ecs.Cluster(this, 'cluster', {
      vpc: new ec2.Vpc(this, 'vpc', {
        maxAzs: 2
      })
    })

    const service = new ApplicationLoadBalancedFargateService(this, 'service', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('src/')
      },
      publicLoadBalancer: true
    })

    const scaling = service.service.autoScaleTaskCount({
      maxCapacity: 4
    })
    scaling.scaleOnCpuUtilization('scale-metric', {
      targetUtilizationPercent: 75
    })
  }
}
