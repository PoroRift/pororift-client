pipeline {
    agent {label 'docker'}

    stages {
        stage('build docker image') {
            steps { 
                sh 'docker build -t pororift-client:latest .'
            }
        }
        stage('clean up env') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}