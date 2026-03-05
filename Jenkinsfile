pipeline {
    agent any

    environment {
        CONTAINER_NAME = "bmw-x3-container"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/riyamaruthachalam54-web/BMW-X3.git'
            }
        }

        stage('Build') {
            steps {
                bat'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker-compose down || true'
                bat 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }
        failure {
            echo 'Pipeline Failed'
        }
    }
}