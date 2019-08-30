pipeline {
    agent {
        label 'docker'
    }
    options {
        // 添加日志打印时间
        timestamps()
        // 设置全局超时
        timeout(time: 30, unit: 'MINUTES')
    }
    environment {
        GITHUB_USER_ID = '2b98d5a0-65f8-4961-958d-ad3620541256'
        GITHUB_BRANCH = 'develop'
        ALIYUN_USER_ID = '06989ce7-86fb-43ca-aec0-313d260af382'
        HAO_IMAGE_TAG = 'registry.cn-shenzhen.aliyuncs.com/tendcode/hao:test'
    }
    stages {
        stage('克隆代码') {
            options {
                timeout(time: 30, unit: 'SECONDS')
            }
            steps {
                git (credentialsId: "${GITHUB_USER_ID}", url: 'https://github.com/Hopetree/hao.git', branch: "${GITHUB_BRANCH}")
            }
        }
        stage('构建镜像') {
            steps {
                script {
                    docker.build("${HAO_IMAGE_TAG}")
                }
            }
        }
        stage('推送镜像') {
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