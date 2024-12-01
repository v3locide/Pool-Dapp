pipeline{
    agent any
    tools {
        nodejs "NodeJS-22.11.0"
    }
    environment{
        FOUNDRY_PATH = "/var/lib/jenkins/.foundry/bin/"
        BACKEND_IMAGE_NAME = "velocide/foundry"
        DOCKER_HUB_CREDENTIALS_ID = "dockerhub_id"
    }
    stages{
        stage("Fetch"){
            steps{
                git branch: 'pool-docker', url: "https://github.com/v3locide/Pool-Dapp.git"
            }
        }
        stage("Backend: Setup environment"){
            steps{
                dir("${env.WORKSPACE}/backend") {
                    sh '''
                    pwd
                    curl -L https://foundry.paradigm.xyz | bash
                    . /var/lib/jenkins/.bashrc && foundryup
                    rm -rf lib
                    forge install OpenZeppelin/openzeppelin-contracts --no-commit
                    '''
                    sh "npm install --save-dev solhint"
                }
            }
        }
        stage("Backend: Lint tests") {
            steps{
                dir("${env.WORKSPACE}/backend") {
                    sh "npx solhint src/*.sol"
                }
            }
        }
        stage("Backend: Forge tests") {
            steps{
                dir("${env.WORKSPACE}/backend") {
                    sh "${env.FOUNDRY_PATH}forge test -vvvvv"
                }
            }
        }
        stage("Backend: Build Docker Image") {
            steps{
                script {
                    dockerImage = docker.build(BACKEND_IMAGE_NAME + ":$BUILD_NUMBER", "./backend/")
                }
            }
        }
        stage('Push App Image') {
            steps{
                script {
                    docker.withRegistry ('', DOCKER_HUB_CREDENTIALS_ID) {
                        echo "Successfully logged in to Docker Hub"
                    }
                }              
            }
        }
    }
    post{
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
