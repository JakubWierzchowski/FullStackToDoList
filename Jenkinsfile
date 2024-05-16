pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:$PATH"  // Add Docker and Docker Compose to PATH
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/JakubWierzchowski/FullStackToDoList.git'
            }
        }

        stage('Check Docker and Docker Compose') {
            steps {
                script {
                    sh 'which docker'
                    sh 'docker --version'
                    sh 'which docker-compose'
                    sh 'docker-compose --version'
                }
            }
        }

        stage('Build and Run with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d --build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'docker-compose exec server npm test'
                }
            }
        }

        stage('Stop and Clean Up') {
            steps {
                script {
                    sh 'docker-compose down'
                }
            }
        }
    }
}
