pipeline {
    agent any
    tools {
        nodejs 'node'
        git 'git'
    }

    stages {
        stage('Update project') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']],
    userRemoteConfigs: [[url: 'git@github.com:leozin-ardo/nightOwl.git',
     credentialsId: '69f57908-d9e0-4ed6-8d89-0898805f2364']]])
            }
        }
        stage('Install project') {
            steps {
                sh 'yarn'
            }
        }
        stage('test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}
