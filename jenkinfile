pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
        stage('git clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Behera873/node.js.git'
            }
        }
        stage('Verify workspace') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }
        stage('install dependency') {
            steps {
                sh 'npm install'
            }
        }
        stage('start pm2') {
            steps {
                sh 'pm2 delete my-app || true'
                sh 'pm2 start index.js --name my-app'
                sh 'pm2 save'
            }
        }
    }
}
