pipeline{
    agent any
    tools {
        nodejs "NodeJS-22.11.0"
    }
    environment{
        FOUNDRY_PATH = "/var/lib/jenkins/.foundry/bin/"
        BACKEND_IMAGE_NAME = "velocide/foundry"
        DOCKER_HUB_CREDENTIALS_ID = "dockerhub_id"
	    IMAGE_TAG = "latest"
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
                    dockerImage = docker.build(BACKEND_IMAGE_NAME + ":$IMAGE_TAG", "./backend/")
                }
            }
        }
        stage('Backend: Push Image') {
            steps{
                script {
                    docker.withRegistry ('', DOCKER_HUB_CREDENTIALS_ID) {
                        dockerImage.push()
                    }
                }              
            }
        }
		stage('Install Kubectl') {
			steps {
				sh '''
				curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
                chmod +x kubectl
                sudo mv kubectl /usr/bin/kubectl
				'''
			}
		}
        stage('Backend: Deploy to Kubernetes') {
            steps {
                dir("${env.WORKSPACE}/infra") {
                    script {
                        kubeconfig(caCertificate: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURCVENDQWUyZ0F3SUJBZ0lJSTFkdm85UFFEL0l3RFFZSktvWklodmNOQVFFTEJRQXdGVEVUTUJFR0ExVUUKQXhNS2EzVmlaWEp1WlhSbGN6QWVGdzB5TkRFeU1ERXhOekUwTVRsYUZ3MHpOREV4TWpreE56RTVNVGxhTUJVeApFekFSQmdOVkJBTVRDbXQxWW1WeWJtVjBaWE13Z2dFaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQkR3QXdnZ0VLCkFvSUJBUURDUlVqbG9HZCtXMGRWN0V6Z29TYzUrM1hVYjlDRU5RUFVYM1BKMVBlSGx2ci80endYOVFqYktVbk0KY1NjNHRCM3NwS21RcVdoZ2kzY283VWJQdE84Y0ZEblhzTGM1YnU5WERBKzg4OWZ0L2xOaWpWR2VmdzU0aWYzcAplMmFkdzV2aDVHbEthbzBZTUJwaWdIanIyZjFFQ1JUcmR2ZGxrNldlYlk4MEw2ZjFSR2drVExNckozdEJJVmpTCnFGQkNDbmJuc05UcnpoMHdTanNnWU1GOVhQV2dWdlA5SW1FS0RQQWRQYlliMUdLOFJ6c3grL0pSOWtVQkROTFMKTFc1clcrRmo1N1VqRUR0MzU4VDNVVGhmOVhobS9VZ3FhdTl6UW5xRmtqemhmT05pMmgza2xjOEZ3TGVGSytKZgp1QlFBY3FaQVQva2Uxelc0UjRZYUszc3FUT1ZSQWdNQkFBR2pXVEJYTUE0R0ExVWREd0VCL3dRRUF3SUNwREFQCkJnTlZIUk1CQWY4RUJUQURBUUgvTUIwR0ExVWREZ1FXQkJTSFBnMlNhMVdjejQ4MkV5Y0lGNVdQcW44cUh6QVYKQmdOVkhSRUVEakFNZ2dwcmRXSmxjbTVsZEdWek1BMEdDU3FHU0liM0RRRUJDd1VBQTRJQkFRQ3k3clBOYUhrcgpHbXNzUlpHRnpVU2ZDSUJ4WW9YL3NUajVEcDNTWWU2WVFRYWpVSzZpemsvVWxWaXp3RFc0WUxGQk1JSTdRMkVwCktxeWl5S2N1V0w3MDZ4YkVDUHppVVlQVFZaMDdCU0p1c1hnN0E1SkU5bFZEWWNUMmpmMzJVUVpBYWpEdWFRQ3oKQXdBUGZGWDIyQmFqTmZEeGs5QlJyNTl0QW1tOXdVbkQyeVRHQkRjaTZ1R3dZMFFzdEJ2N0ltWHR2R0RPTTVMVwpJTi90a0JIWUlTbUFrUktEcUZPT1hkTXhhUGQ4OWV0S1Zzc0hzZHBVUXVQOEFiNmVHZ0d3WkJTY2oyTkV0cmVNCklKWGRjWFlnY0oyc2x0c2ZRdW1DNlV6TlJmbHN3T2xmOGx3R0JaMUc1a0hRdS94SXlyVEhRb1JaRWxsdVRFV3EKV1FUTC9lSmUrZ0t4Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K', credentialsId: 'kubeconfig', serverUrl: 'https://master-node:6443') {
			                sh 'kubectl apply -f anvil-service.yaml'
                            sh 'kubectl apply -f anvil-deployment.yaml'
                            sh 'kubectl apply -f contract-script-deployment.yaml'
                        }
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
