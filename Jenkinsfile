pipeline {
    agent any

	environment {
        BUCKET_NAME = "angu-local"
	}
	 tools { nodejs 'node12.10.0' }


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
               
                cd $WORKSPACE/dist/project/
				aws s3 rm s3://$BUCKET_NAME  --recursive
				aws s3 cp . s3://$BUCKET_NAME --recursive
                sh "aws s3 cp dist/* s3://angu-local"
				}	
			}
		}
	}
