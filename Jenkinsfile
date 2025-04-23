pipeline {
    agent any

    environment {
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    def services = ['auth-service', 'cart-service', 'product-service']
                    for (svc in services) {
                        sh "docker build -t ${svc}:${IMAGE_TAG} -f ${svc}/Dockerfile ${svc}"
                    }
                }
            }
        }

        stage('Login to AWS ECR') {
            steps {
                // Your ECR login command
            }
        }

        stage('Push Docker Images to ECR') {
            steps {
                script {
                    def services = ['auth-service', 'cart-service', 'product-service']
                    for (svc in services) {
                        sh "docker tag ${svc}:${IMAGE_TAG} <your-account-id>.dkr.ecr.<region>.amazonaws.com/${svc}:${IMAGE_TAG}"
                        sh "docker push <your-account-id>.dkr.ecr.<region>.amazonaws.com/${svc}:${IMAGE_TAG}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment logic goes here"
            }
        }
    }

    post {
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
