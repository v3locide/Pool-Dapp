pipeline{
    agent any
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
        stage('Use Custom Workspace') {
            steps {
                script {
                    // Setting a custom workspace for this stage
                    ws("${env.WORKSPACE}/backend") {
                        echo "Using a custom workspace at: ${env.WORKSPACE}"
                    }
                }
            }
        }
        stage("Setup environment"){
            steps{
                script {
                    sh "curl -L https://foundry.paradigm.xyz | bash"
                    sh 'bash -l -c "source /var/lib/jenkins/.bashrc && foundryup"'
                    ws("${env.WORKSPACE}/backend") {
                        sh "ls && npm install --save-dev solhint"
                        sh 'bash -l -c "forge install OpenZeppelin/openzeppelin-contracts --no-commit"'
                    }
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