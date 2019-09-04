def deploy(vm_name, image_tar, service_dir, image_name) {
    sshPublisher(publishers: [
        sshPublisherDesc(
            configName: "${vm_name}", 
            transfers: [
                sshTransfer(
                    cleanRemote: false, 
                    excludes: '', 
                    execCommand: "docker load < ${service_dir}/${image_tar} && rm -f ${service_dir}/${image_tar}", 
                    execTimeout: 120000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: 'hao', 
                    remoteDirectorySDF: false, 
                    removePrefix: '', 
                    sourceFiles: 'hao.*'
                ),
                sshTransfer(
                    cleanRemote: false, 
                    excludes: '', 
                    execCommand: "docker images|grep none|awk '{print \$3}'|xargs -I {} docker image rm {} > /dev/null 2>&1 || true", 
                    execTimeout: 120000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: 'hao', 
                    remoteDirectorySDF: false, 
                    removePrefix: '', 
                    sourceFiles: 'docker-compose.yml'
                ),
                sshTransfer(
                    cleanRemote: false, 
                    excludes: '', 
                    execCommand: "cd ${service_dir} && docker-compose down && echo HAO_IMAGE=${image_name} > .env && docker-compose up -d", 
                    execTimeout: 120000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: '', 
                    remoteDirectorySDF: false, 
                    removePrefix: '', 
                    sourceFiles: ''
                )
            ], 
            usePromotionTimestamp: false, 
            useWorkspaceInPromotion: false, 
            verbose: false
        )
    ])
}

return this