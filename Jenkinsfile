pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-2'
        ECR_REPO = '430195503517.dkr.ecr.eu-west-2.amazonaws.com/product-service'
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Cloning repository..."
                git branch: 'main',
                    url: 'https://github.com/ecom-microservices-architecture/product-service.git'
                // If private repo, add credentialsId: 'your-credential-id'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t ${ECR_REPO}:latest .'
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                echo "Logging in to Amazon ECR..."
                sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}'
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                echo "Pushing Docker image to ECR..."
                sh 'docker push ${ECR_REPO}:latest'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully."
        }
        failure {
            echo "Pipeline failed. Check logs for errors."
        }
    }
}
