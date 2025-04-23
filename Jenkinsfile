pipeline {
    agent any

    environment {
        AWS_REGION = 'us-west-2'  // Set your AWS region
    }

    stages {
        stage('Login to AWS ECR') {
            steps {
                script {
                    // Use the correct credentials ID
                    withCredentials([aws(credentialsId: 'aws-jenkins-creds')]) {
                        // AWS CLI commands
                        sh 'aws sts get-caller-identity'

                        // Login to AWS ECR
                        sh '''
                            aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 430195503517.dkr.ecr.$AWS_REGION.amazonaws.com
                        '''
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying to AWS"
                // Add your deployment steps here
            }
        }
    }
}
