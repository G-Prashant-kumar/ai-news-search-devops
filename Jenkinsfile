pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-creds' //update credentials 
        DOCKER_IMAGE = 'prashant11122'  // update docker image name
        IMAGE_TAG = 'ai-news-frontend'  // update image tag
        NAMESPACE = "prashant-ns"  // update namespace name
    }

    stages {

        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/G-Prashant-kumar/ai-news-search-devops', // update repository url
                    branch: 'main' // update branch name
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE:$IMAGE_TAG ."
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    sh """
                    echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
                    docker push $DOCKER_IMAGE:$IMAGE_TAG
                    docker logout
                    """
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh """
                    sed 's|IMAGE_PLACEHOLDER|$DOCKER_IMAGE:$IMAGE_TAG|g' deployment.yaml > k8s-deployment-generated.yaml
                    kubectl apply -f k8s-deployment-generated.yaml
                    echo "Waiting to get the service IP..."
                    sleep 10
                    kubectl get po -n $NAMESPACE
                    kubectl get svc -n $NAMESPACE
                    """
                }
            }
        }

        stage('Deploy Backend') {

            steps {

                script {

                    sh '''
                    kubectl apply -f backend-deployment.yaml

                    sleep 15

                    kubectl get svc -n prashant-ns
                    '''
                }
            }
        }


    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}