pipeline {
    agent any
    tools { nodejs 'node' }

    stages {
        stage('Update project') {
            steps {
                script {
                    if (fileExists('yarn.lock')) {
                        sh 'git pull https://github.com/leozin-ardo/nightOwl.git dev --rebase'
                    } else {
                        sh 'git clone "https://github.com/leozin-ardo/nightOwl.git"'
                        sh 'git checkout origin/dev'
                    }
                }
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
        stage('merge homolog') {
            steps {
                sh 'git checkout origin/homolog'
                sh 'git merge origin/dev'
            }
        }
    }
}
