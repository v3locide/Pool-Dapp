pipeline{
    agent any
    tools {
        nodejs "NodeJS-22.11.0"
    }
    environment{
        PATH = "/var/lib/jenkins/.foundry/bin/"
    }
    stages{
        stage("Fetch"){
            steps{
                git branch: 'main', url: "https://github.com/v3locide/Pool-Dapp.git"
            }
        }
        stage("Setup environment"){
            steps{
                dir("${env.WORKSPACE}/backend") {
                    sh "ls -a /var/lib/jenkins/.foundry"
                    sh '''
                    pwd
                    curl -L https://foundry.paradigm.xyz | bash
                    . /var/lib/jenkins/.bashrc && foundryup
                    forge install OpenZeppelin/openzeppelin-contracts --no-commit
                    '''
                    sh "npm install --save-dev solhint"
                }
            }
        }
        stage("Lint tests") {
            steps{
                sh "npx solhint src/*.sol"
            }
        }
        stage("Forge tests") {
            steps{
                sh "${env.PATH}forge test -vvvvv"
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}