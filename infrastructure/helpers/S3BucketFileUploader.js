import AWS from "aws-sdk";
import config from "config";
import fsPromise from "fs/promises";

class S3BucketFileUploader {

  s3Bucket = new AWS.S3({
    accessKeyId: config.get("aws_access_key"),
    secretAccessKey: config.get("aws_secret_access_key"),
  });

  async upload(multerFileObject) {
    const fileContent = await fsPromise.readFile(multerFileObject.path, { encoding: "utf-8" });
    const params = { Bucket: config.get("file_upload_s3_bucket_name"), Key: multerFileObject.filename, Body: JSON.stringify(fileContent, null, 2), CreateBucketConfiguration: { LocationConstraint: "ap-south-1" } };
    const result = await this.s3Bucket.upload(params).promise();
    return result;
  }

}

export default new S3BucketFileUploader();