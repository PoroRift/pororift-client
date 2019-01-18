pipeline {
    agent {label 'docker'}

    stages {
        stage('build docker image') {
            steps{ 
                sh 'docker build -t pororift-client:latest .'
            }
        }
        stage('deploy') { 
            steps {
                echo 'publish somewhere'
            }
        }
        stage('clean up env') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}