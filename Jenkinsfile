pipeline {                                                                                                       
     agent {
        docker {
          image 'node:10.11.0-alpine'
        }
     }
     stages {
        stage ("Build") {
           steps {
              sh "npm install"
           }
        }
     }
  }