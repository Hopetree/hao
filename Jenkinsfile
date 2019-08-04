pipeline {
    agent {
        label 'docker'
    }
    options {
        timestamps()
    }
    stages {
        stage('Clone sources') {
            options {
                timeout(time: 30, unit: 'SECONDS')
            }
            steps {
                git credentialsId: '2b98d5a0-65f8-4961-958d-ad3620541256', url: 'https://github.com/Hopetree/hao.git'
            }
        }
        stage('Make vue') {
            steps {
                sh label: 'make dist for vue', 
                script: '''npm install
                npm audit fix
                npm run build'''
            }
        }
        stage('Build image') {
            steps {
                sh label: 'build image for vue project',
                script: '''pwd && ls -l
                docker build -t hao --no-cache .
                docker images|grep none|awk '{print $3}'|xargs docker image rm > /dev/null 2>&1
                docker images'''
            }
        }
        stage('Clean workspace') {
            steps {
                cleanWs()
            }
        }
    }
}