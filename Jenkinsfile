pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-2'
        ECR_REPO = '430195503517.dkr.ecr.eu-west-2.amazonaws.com/product-service'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/MuhammadZeeshan82/ecom-microservices-architecture-',
                        credentialsId: 'github-creds' // remove this line if repo is public
                    ]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${ECR_REPO}:latest .'
                }
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}'
                }
            }
        }

        stage('Push Docker Image to ECR') {
            steps {
                script {
                    sh 'docker push ${ECR_REPO}:latest'
                }
            }
        }
    }
}
