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
                git checkout dev
            }
        }
        stage('Install project') {
            steps {
                yarn
            }
        }
        stage('test') {
            steps {
                echo('testing')
                yarn test
                echo('test done ✔️')
            }
        }
    }
}
