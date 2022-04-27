import AWS from "aws-sdk";
import fsPromise from "fs/promises";

class S3BucketFileUploader {

  s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  async upload(multerFileObject, bucketName, bucketFolderName) {
    const fileContent = await fsPromise.readFile(multerFileObject.path);
    const bucketNameWithFolderName = `${bucketName}/${bucketFolderName}`;
    const params = { Bucket: bucketNameWithFolderName, Key: multerFileObject.filename, Body: fileContent, CreateBucketConfiguration: { LocationConstraint: process.env.aws_region } };
    const result = await this.s3Bucket.upload(params).promise();
    return result;
  }

}

export default new S3BucketFileUploader();