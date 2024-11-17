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
        stage("Setup environment"){
            steps{
                dir("${env.WORKSPACE}/backend") {
                    sh '''
                    pwd
                    curl -L https://foundry.paradigm.xyz | bash
                    . /var/lib/jenkins/.bashrc && foundryup
                    forge install OpenZeppelin/openzeppelin-contracts --no-commit
                    '''
                }
            }
        }
        // stage("Lint tests") {
        //     steps{
        //         sh "solhint src/*.sol"
        //     }
        // }
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