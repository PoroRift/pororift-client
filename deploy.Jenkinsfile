pipeline {
    agent any 

    stages {
        stage ('build docker image') {
            step{ 
                sh 'docker build -t pororift-client:latest .'
            }
        }
        stage ('deploy') { 
            step {
                echo 'publish somewhere'
            }
        }
        stage ('clean up env') {
            step {
                sh 'docker system prune -f'
            }
        }
    }
}