pipeline {
    agent any

    environment {
        AWS_REGION = 'us-west-2'  // Update if your AWS region is different
        ECR_REGISTRY = '430195503517.dkr.ecr.us-west-2.amazonaws.com'
        ECR_REPOSITORY = 'ecom-microservices-architecture-'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $ECR_REPOSITORY:$IMAGE_TAG ."
                }
            }
        }

        stage('Login to AWS ECR') {
            steps {
                script {
                    withCredentials([[
                        $class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-jenkins-creds'
                    ]]) {
                        sh """
                            aws ecr get-login-password --region $AWS_REGION | \
                            docker login --username AWS --password-stdin $ECR_REGISTRY
                        """
                    }
                }
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                script {
                    sh """
                        docker tag $ECR_REPOSITORY:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
                        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Optional: Add ECS deployment logic or other deployment steps here
            }
        }
    }

    post {
        failure {
            echo "❌ Pipeline failed."
        }
        success {
            echo "✅ Pipeline succeeded."
        }
    }
}
