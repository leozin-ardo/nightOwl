pipeline {
    agent any
    tools { nodejs 'node' }

    stages {
        stage('Clonning project') {
            steps {
                git  'https://github.com/leozin-ardo/nightOwl.git'
            }
        }
        stage('Change branch to dev') {
            steps {
                checkout scmGit(
    branches: [[name: 'dev']],
    userRemoteConfigs: [[url: 'https://github.com/leozin-ardo/nightOwl.git']])
            }
        }
        stage('Install project') {
            steps {
                sh 'yarn'
            }
        }
        stage('test') {
            steps {
                echo 'testing'
                sh 'yarn test'
                echo 'test done ✔️'
            }
        }
    }
}
