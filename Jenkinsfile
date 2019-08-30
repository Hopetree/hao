pipeline {
    agent {
        label 'docker'
    }
    options {
        // 添加日志打印时间
        timestamps()
        // 设置全局超时
        timeout(time: 10, unit: 'MINUTES')
    }
    parameters {
        choice(name: 'GITHUB_BRANCH', choices: ['master', 'develop'], description: 'checkout github branch')
    }
    environment {
        GITHUB_USER_ID = '2b98d5a0-65f8-4961-958d-ad3620541256'
        ALIYUN_USER_ID = '06989ce7-86fb-43ca-aec0-313d260af382'
        IMAGE_NAME = 'hao:test'
        REMOTE_IMAGE_NAME = 'registry.cn-shenzhen.aliyuncs.com/tendcode/hao:lts'
        IMAGE_TAR = 'hao.tar'
    }
    stages {
        stage('克隆代码') {
            options {
                timeout(time: 2, unit: 'MINUTES')
            }
            steps {
                git (credentialsId: "${GITHUB_USER_ID}", url: 'https://github.com/Hopetree/hao.git', branch: "${GITHUB_BRANCH}")
            }
        }
        stage('构建镜像') {
            steps {
                script {
                    sh "docker build --no-cache -t ${IMAGE_NAME} ."
                    sh "docker save ${IMAGE_NAME} > ${IMAGE_TAR}"
                }
            }
        }
        stage('推送镜像') {
            steps {
                script {
                    if ("${params.GITHUB_BRANCH}" == "master") {
                        withDockerRegistry(credentialsId: "${ALIYUN_USER_ID}", url: 'http://registry.cn-shenzhen.aliyuncs.com') {
                            sh "docker tag ${IMAGE_NAME} ${REMOTE_IMAGE_NAME}"
                            sh "docker push ${REMOTE_IMAGE_NAME}"
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            // 清理临时容器和镜像
            sh "docker ps -a|grep Exited|awk '{print \$1}'|xargs -I {} docker rm {}"
            sh "docker images|grep '<none>'|awk '{print \$3}'|xargs -I {} docker image rm {} > /dev/null 2>&1 || true"
            sh "docker images"
            cleanWs()
        }
    }
}