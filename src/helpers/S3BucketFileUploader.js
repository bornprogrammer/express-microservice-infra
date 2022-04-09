import AWS from "aws-sdk";
import fsPromise from "fs/promises";

class S3BucketFileUploader {

  s3Bucket = new AWS.S3({
    accessKeyId: process.env.aws_access_key,
    secretAccessKey: process.env.aws_secret_access_key,
  });

  async upload(multerFileObject, bucketName, bucketFolderName) {
    const fileContent = await fsPromise.readFile(multerFileObject.path, { encoding: "utf-8" });
    const bucketNameWithFolderName = `${bucketName}/${bucketFolderName}`;
    const params = { Bucket: bucketNameWithFolderName, Key: multerFileObject.filename, Body: JSON.stringify(fileContent, null, 2), CreateBucketConfiguration: { LocationConstraint: process.env.aws_region } };
    const result = await this.s3Bucket.upload(params).promise();
    return result;
  }

}

export default new S3BucketFileUploader();