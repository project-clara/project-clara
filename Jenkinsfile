node {
    try {
        stage('checkout') {
            git branch: 'develop', url: 'https://github.com/project-clara/project-clara.git'
        }
        stage('build & deploy') {
            sh "docker-compose down"
            sh "docker rmi project-clara-angular || exit"
            sh "docker-compose up -d --build"
        }
    } catch (e) {
        currentBuild.result = "FAILED"
        throw e
    } finally {
        notifyBuild(currentBuild.result)
    }
}

def notifyBuild(String buildStatus = 'STARTED') {
    // build status of null means successful
    buildStatus = buildStatus ? buildStatus : 'SUCCESSFUL'
    
    def colors = [red: '#FF0000', yellow: '#FFFF00', green: '#00FF00']
    def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
    def summary = "${subject} (<${env.BUILD_URL}|open>)"
    
    def statusColor = colors.red
    if (buildStatus == 'STARTED' || buildStatus == 'UNSTABLE') {
        statusColor = colors.yellow
    } else if (buildStatus == 'SUCCESSFUL') {
        statusColor = colors.green
    } 
    
    summary += getLastCommits()
    
    slackSend (color: statusColor, message: summary)
}

def getLastCommits() {
    def commits = ""
    def commitHashes = ""
    def parentBranches = '$(git branch -a --list origin/master origin/develop origin/epic/*)'
    def ancestorCommit = sh(script: "git merge-base HEAD ${parentBranches}", returnStdout: true).trim()
    def lastCommit = sh(script: "git log -1 --pretty=%H", returnStdout:true).trim()
    echo "lastCommit: ${lastCommit}, ancestorCommit: ${ancestorCommit}, parentBranches: ${parentBranches}"
    
    if (lastCommit.equals(ancestorCommit)) {
        // get last commit if we do not have a dist ancestor
        commitHashes = [sh(script: "git log -1 --pretty=%H", returnStdout: true).trim()]
    } else {
        // get max 5 commits since ancestor
        commitHashes = sh(script: "git rev-list -5 ${ancestorCommit}..", returnStdout: true).trim().tokenize('\n')
    }
    for (commit in commitHashes) {
        def author = sh(script: "git log -1 --pretty=%an ${commit}", returnStdout: true).trim()
        def commitMsg = sh(script: "git log -1 --pretty=%B ${commit}", returnStdout: true).trim()
        commits += " Commit by ${author}: ${commitMsg} "
    }
    return commits
}
