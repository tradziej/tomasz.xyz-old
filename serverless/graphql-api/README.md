## Installation
    
1. Install global dependencies.
    ```bash
    npm install -g serverless
    ```
    
2. Install framework dependencies.
    ```bash  
    npm install
    ``` 

## Configuration

Create the configuration file.
    ```bash
    cp serverless.env.template.yml serverless.env.yml
    ```

Service is using `serverless-domain-manager` plugin for managing custom domains with API Gateway.
Please set your domain name and certificate name at `serverless.env.yml` file and run: `serverless create_domain -s prod`


## Local Development

Run a local server.
    ```bash
    npm run local
    ```

## Deployment

Run a deploy script.
    ```bash
    npm run deploy
    ```

Run this script if you want to destroy a service.
    ```bash
    npm run destroy
    ```

Where to query a GraphQL API: `https://yourdomain.com/query`