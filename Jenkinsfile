pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-2'
        ECR_REPO_AUTH = '430195503517.dkr.ecr.eu-west-2.amazonaws.com/auth-service'
        ECR_REPO_CAR = '430195503517.dkr.ecr.eu-west-2.amazonaws.com/car-service'
        ECR_REPO_PRODUCT = '430195503517.dkr.ecr.eu-west-2.amazonaws.com/product-service'
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

        stage('Build Auth-Service Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${ECR_REPO_AUTH}:latest ./auth-service'
                }
            }
        }

        stage('Build Car-Service Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${ECR_REPO_CAR}:latest ./car-service'
                }
            }
        }

        stage('Build Product-Service Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${ECR_REPO_PRODUCT}:latest ./product-service'
                }
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin 430195503517.dkr.ecr.eu-west-2.amazonaws.com'
                }
            }
        }

        stage('Push Docker Images to ECR') {
            steps {
                script {
                    sh 'docker push ${ECR_REPO_AUTH}:latest'
                    sh 'docker push ${ECR_REPO_CAR}:latest'
                    sh 'docker push ${ECR_REPO_PRODUCT}:latest'
                }
            }
        }
    }
}
