pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-2'
        ECR_REGISTRY = '430195503517.dkr.ecr.eu-west-2.amazonaws.com'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'your-git-credentials-id', url: 'https://github.com/your-username/shopping-microservices.git'
            }
        }

        stage('Login to AWS ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY'
                }
            }
        }

        stage('Build and Push Auth Service') {
            steps {
                dir('auth-service') {
                    sh """
                        docker build -t auth-service .
                        docker tag auth-service:latest $ECR_REGISTRY/auth-service:latest
                        docker push $ECR_REGISTRY/auth-service:latest
                    """
                }
            }
        }

        stage('Build and Push Cart Service') {
            steps {
                dir('cart-service') {
                    sh """
                        docker build -t cart-service .
                        docker tag cart-service:latest $ECR_REGISTRY/cart-service:latest
                        docker push $ECR_REGISTRY/cart-service:latest
                    """
                }
            }
        }

        stage('Build and Push Product Service') {
            steps {
                dir('product-service') {
                    sh """
                        docker build -t product-service .
                        docker tag product-service:latest $ECR_REGISTRY/product-service:latest
                        docker push $ECR_REGISTRY/product-service:latest
                    """
                }
            }
        }
    }
}
