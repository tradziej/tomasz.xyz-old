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