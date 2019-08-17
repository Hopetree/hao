pipeline {
    agent {
        label 'docker'
    }
    options {
        timestamps()
    }
    environment {
        GITHUB_USER_ID = '2b98d5a0-65f8-4961-958d-ad3620541256'
        ALIYUN_USER_ID = '06989ce7-86fb-43ca-aec0-313d260af382'
        HAO_IMAGE_TAG = 'registry.cn-shenzhen.aliyuncs.com/tendcode/hao:latest'
        NODE_IAMGE_TAG = 'node:latest'
    }
    stages {
        stage('Clone sources') {
            options {
                timeout(time: 30, unit: 'SECONDS')
            }
            steps {
                git (credentialsId: "${GITHUB_USER_ID}", url: 'https://github.com/Hopetree/hao.git', branch: 'master')
            }
        }
        stage('Make vue') {
            steps {
                withDockerContainer(image: "${NODE_IAMGE_TAG}") {
                    sh "npm config set registry https://registry.npm.taobao.org/"
                    sh "npm install && npm audit fix && npm run build"
                    sh "pwd && ls -l"
                }
            }
        }
        stage('Build image') {
            steps {
                script {
                    docker.build("${HAO_IMAGE_TAG}")
                }
            }
        }
        stage('Push image') {
            steps {
                withDockerRegistry(credentialsId: "${ALIYUN_USER_ID}", url: 'http://registry.cn-shenzhen.aliyuncs.com') {
                    sh "docker push ${HAO_IMAGE_TAG}"
                }
            }
        }
    }
    post {
        always {
            sh "docker images|grep '<none>'|awk '{print \$3}'|xargs docker image rm > /dev/null 2>&1 || true"
            sh "docker images"
            cleanWs()
        }
    }
}