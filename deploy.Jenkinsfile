pipeline{
    agent any
    stages {
        stage ('build docker image') {
            steps {
                sh 'docker build -t pororift-client .'
            }
        }
        stage ('publish to somewhere') {
            steps {
                echo 'publish to somewhere'
            }
        }
    }
}