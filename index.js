import {CreateBucketCommand, S3Client} from '@aws-sdk/client-s3'

async function main(){
    const region = 'us-east-2'
    const bucketName = `hcode-treinamentos-${Date.now()}`;
    const s3 = new S3Client({
        region
    })
    await s3.send(new CreateBucketCommand({
        Bucket: bucketName
    }))
    console.log(s3)
}
main()

