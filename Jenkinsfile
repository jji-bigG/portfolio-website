/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        REACT_APP_API_URL = credentials('api-url-credential-id')
        // Add other environment variables as needed
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Build the Docker image
                sh 'docker build -t pweb .'

                // Stop and remove any existing container
                sh 'docker rm -f pweb || true'

                // Run the new container
                sh 'docker run -d -p 3030:3000 --name pweb pweb'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            junit 'test-results/**/*.xml'
        }

        success {
            echo 'Build and tests were successful!'
        }

        failure {
            echo 'Build or tests failed!'
        }
    }
}
