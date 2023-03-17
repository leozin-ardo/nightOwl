pipeline {
    agent any
    tools { nodejs 'node' }

    stages {
        stage('Clonning project') {
            steps {
                git 'https://github.com/leozin-ardo/nightOwl.git'
            }
        }
        stage('Change branch to dev') {
            steps {
                sh 'git checkout dev'
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
