// pipeline {
//     agent any

//     stages {
//         stage('Checkout') {
//             steps {
//                 git 'https://github.com/JakubWierzchowski/FullStackToDoList.git'  // Zastąp właściwym URL swojego repozytorium
//             }
//         }

//         stage('Build') {
//             steps {
//                 script {
//                     def app = docker.build("FullStackToDoList")
//                 }
//             }
//         }

//         stage('Test') {
//             steps {
//                 sh 'npm test'
//             }
//         }

//         stage('Run Container Locally') {
//             steps {
//                 script {
//                     def app = docker.build("FullStackToDoList")
//                     app.run("-p 3000:3000")  // Zastąp portem, na którym działa Twoja aplikacja
//                 }
//             }
//         }
//     }
// }

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/JakubWierzchowski/FullStackToDoList.git'  // Zastąp właściwym URL swojego repozytorium
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    def frontend = docker.build("client", "-f client/Dockerfile .")
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    def backend = docker.build("backend-app", "-f server/Dockerfile .")
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run Containers Locally') {
            steps {
                script {
                    def frontend = docker.build("client", "-f client/Dockerfile .")
                    def backend = docker.build("server", "-f server/Dockerfile .")
                    
                    // Uruchomienie frontend na porcie 3000
                    frontend.run("-p 3000:3000")
                    
                    // Uruchomienie backend na porcie 5000
                    backend.run("-p 5000:5000")
                }
            }
        }
    }
}

