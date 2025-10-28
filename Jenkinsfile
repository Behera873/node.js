pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Git Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Behera873/node.js.git'
            }
        }

        stage('Verify Workspace') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start with PM2') {
            steps {
                sh '''
                    # Stop the existing app if running
                    pm2 delete my-app || true

                    # Start new app
                    pm2 start app.js --name my-app

                    # Save PM2 process list
                    pm2 save
                '''
            }
        }
    }
}
