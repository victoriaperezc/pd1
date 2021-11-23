pipeline {
    
    agent any
   
    triggers {
        pollSCM('* * * * *')
    }
    
    options { 
        buildDiscarder(logRotator(numToKeepStr: '3', artifactNumToKeepStr: '3', daysToKeepStr: '3', artifactDaysToKeepStr: '3')) 
    }
    
    environment {
        DOCKER_IMAGE_NAME = "victoriaperez/back-documentos"
    }
  
  stages {
    stage('Docker Build') {
      steps {
        sh "docker build -t victoriaperez/back-documentos:${env.BUILD_NUMBER} ."
      }
    }
    stage('Docker Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
          sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh "docker push victoriaperez/back-documentos:${env.BUILD_NUMBER}"
        }
      }
    }
    stage('Docker Remove Image') {
      steps {
        sh "docker rmi victoriaperez/back-documentos:${env.BUILD_NUMBER}"
      }
    }
      stage('Apply Kubernetes Files') {
      steps {
          withKubeConfig([credentialsId: 'kubeconfig']) {
          sh 'cat deploy.yaml | sed "s/{{BUILD_NUMBER}}/$BUILD_NUMBER/g" | kubectl apply -f -'
          sh 'kubectl apply -f service.yaml'
        }
      }
  }
}
  }
