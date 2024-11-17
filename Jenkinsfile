pipeline{
    agent {
        node {
            label 'master'
            customWorkspace "${env.WORKSPACE}/backend"
        }
    }
    tools {
        nodejs "NodeJS-22.11.0"
    }
    // environment{
        
    // }
    stages{
        stage("Fetch"){
            steps{
                git branch: 'main', url: "https://github.com/v3locide/Pool-Dapp.git"
            }
        }
        stage("Setup environment"){
            steps{
                sh "curl -L https://foundry.paradigm.xyz | bash"
                sh 'bash -l -c "source /var/lib/jenkins/.bashrc && foundryup"'
                dir("${env.WORKSPACE}/backend"){
                    sh "npm install --save-dev solhint"
                    sh 'bash -l -c "forge install OpenZeppelin/openzeppelin-contracts --no-commit"'
                }
            }
        }
        stage("Lint tests") {
            steps{
                sh "solhint src/*.sol"
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