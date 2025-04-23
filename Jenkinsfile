pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-2'  // Change to your AWS region
        ECR_REPO = '430195503517.dkr.ecr.eu-west-2.amazonaws.com/product-service'  // Update with your ECR repository URI
        AWS_CLI = '/usr/local/bin/aws'  // Path to AWS CLI
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'  // Update with your GitHub repo URL
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${ECR_REPO}:latest .'  // Build Docker image
                }
            }
        }

        stage('Login to ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}'  // Log in to ECR
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    sh 'docker push ${ECR_REPO}:latest'  // Push Docker image to ECR
                }
            }
        }
    }
}
