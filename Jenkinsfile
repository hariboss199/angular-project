pipeline {
    agent any
	    tools { nodejs "Angular Project" }
    

    stages {
        stage('npm Install') {
            steps {
                script {
			sh 'npm install --verbose -d'
					}
				}
			}
		stage('Build') {
            steps {
		script {
			sh 'npm run build'
            		}
				}
			}
		stage('Deploy') {
            steps {
                sh "aws configure set region $AWS_DEFAULT_REGION" 
                sh "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID"  
                sh "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
                sh "aws s3 cp angular-pro/dist/* s3://angu-local"
				}	
			}
		}
	}
