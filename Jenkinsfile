pipeline {
    
    agent any
   
    triggers {
        pollSCM('* * * * *')
    }
    
    options { 
        buildDiscarder(logRotator(numToKeepStr: '3', artifactNumToKeepStr: '3', daysToKeepStr: '3', artifactDaysToKeepStr: '3')) 
    }
    
    environment {
        DOCKER_IMAGE_NAME = "victoriaperez/front-autentication:214"
    }
  
  stages {
    stage('Docker Build') {
      steps {
        bat "docker build -t victoriaperez/front-autentication:214 ."
      }
    }
    stage('Docker Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
          bat "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          bat "docker push victoriaperez/front-autentication:214"
        }
      }
    }
    stage('Docker Remove Image') {
      steps {
        bat "docker rmi victoriaperez/front-autentication:214"
      }
    }
      stage('Apply Kubernetes Files') {
      steps {
          withKubeConfig([credentialsId: 'kubeconfig']) {
          bat 'kubectl apply -f deploy.yaml'
          bat 'kubectl apply -f service.yaml'
        }
      }
  }
  stage('Post process cleanup'){
      steps{
           withKubeConfig([credentialsId: 'kubeconfig']) {
            bat 'kubectl delete pod --field-selector=status.phase==Succeeded'   
            echo "Cleanup done"
        }
            }
        } 
}

post {
		always {
			script {
				CONSOLE_LOG = "${env.BUILD_URL}/console"
				BUILD_STATUS = currentBuild.currentResult
				if (currentBuild.currentResult == 'SUCCESS') {
					CI_ERROR = "NA"
					}
				}
				sendSlackNotifcation()
		}
	}
}
def sendSlackNotifcation() 
{ 
	if ( currentBuild.currentResult == "SUCCESS" ) {
		buildSummary = "Job:  ${env.JOB_NAME}\n Status: *SUCCESS*\n Build Report: ${env.BUILD_URL}CI-Build-HTML-Report"

		slackSend color : "good", message: "${buildSummary}", channel: '#prueba-toolchain-micro'
		}
	else {
		buildSummary = "Job:  ${env.JOB_NAME}\n Status: *FAILURE*\n Error description: *${CI_ERROR}* \nBuild Report :${env.BUILD_URL}CI-Build-HTML-Report"
		slackSend color : "danger", message: "${buildSummary}", channel: '#prueba-toolchain-micro'
		}
}

