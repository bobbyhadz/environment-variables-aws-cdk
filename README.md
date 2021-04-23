# How to use Environment Variables in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/environment-variables-aws-cdk)

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Deploy with environment variables.

> CHANGE THE REGION TO YOUR PREFERRED REGION

```bash
REGION=us-east-1 \
DEPLOYMENT_ENV=dev \
  npx cdk deploy
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   the region you passed as `environment variable`

5. Cleanup

```bash
npx cdk destroy
```
