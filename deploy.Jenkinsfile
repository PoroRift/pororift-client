pipeline {
    agent {label 'docker'}

    stages {
        stage('Pre Build ~ Clean Up Builder') {
            steps {
                sh 'docker system prune -f'
            }
        }
        stage('Build Docker Image') {
            steps { 
                sh 'docker build -t pororift-client:latest .'
            }
        }
        stage('Deploy Build') {
            steps {
                echo 'Building image....'
                echo 'Pushing image to repository/hub'
            }
        }
        stage('Post Build ~ Clean Up Builder') {
            steps {
                sh 'docker system prune -f'
                sh 'docker rmi pororift-client:latest'
            }
        }
    }
    
    post {
        always {
            sh 'docker system prune -f'
        }
    }
}