pipeline {
    agent any
    stages {
        stage('test') {
            steps {
                echo('testing')
                yarn test
                echo('test done ✔️')
            }
        }
    }
}
