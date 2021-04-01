import boto3
import os

if __name__ == '__main__':
    files_to_upload = [
        'football.html'
    ]

    s3 = boto3.resource('s3',
                        aws_access_key_id=os.environ['AWS_ACCESS_KEY'],
                        aws_secret_access_key=os.environ['AWS_SECRET_KEY'],
                        region_name=os.environ['REGION_NAME'])    
    
    for file in files_to_upload:
        s3.Bucket('www.liamhartley.co.uk').upload_file(f'{os.getcwd()}/{file}', f'{file[:-5]}', ExtraArgs={'Metadata': {'Content-Type': 'text/html'}})
