pipeline {
    agent any
    stages {
        stage('Setup Node.js') {
            steps {
                sh '''
                curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                sudo apt-get install -y nodejs
                node -v
                npm -v
                '''
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
