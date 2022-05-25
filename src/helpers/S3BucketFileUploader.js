import AWS from "aws-sdk";
import fsPromise from "fs/promises";
import config from "config";

class S3BucketFileUploader {

  s3Bucket = new AWS.S3({
    accessKeyId: config.get("aws_access_key"),
    secretAccessKey: config.get("aws_secret_access_key"),
  });

  async upload(multerFileObject, clientFolderName, objectTypeFolderName) {
    if (multerFileObject && Object.keys(multerFileObject).length > 0) {
      const fileContent = await fsPromise.readFile(multerFileObject.path);
      const bucketNameWithFolderName = `${config.get("aws.bucket_name")}/${clientFolderName}/${objectTypeFolderName}`;
      const params = { Bucket: bucketNameWithFolderName, Key: multerFileObject.filename, Body: fileContent, CreateBucketConfiguration: { LocationConstraint: process.env.aws_region } };
      const result = await this.s3Bucket.upload(params).promise();
      return result;
    }
    return null;
  }

  async buildProfilePhotoS3URL(clientName, fileName) {
    const fileUrl = await this.buildS3ObjectURL(clientName, config.get("aws.folders.profile_photo"), fileName);
    return fileUrl;
  }

  async buildBusinessLogoS3URL(clientName, fileName) {
    const fileUrl = await this.buildS3ObjectURL(clientName, config.get("aws.folders.business_logo"), fileName);
    return fileUrl;
  }

  async buildJobDescriptionS3URL(clientName, fileName) {
    const fileUrl = await this.buildS3ObjectURL(clientName, config.get("aws.folders.job_description"), fileName);
    return fileUrl;
  }

  async buildResumeS3URL(clientName, fileName) {
    const fileUrl = await this.buildS3ObjectURL(clientName, config.get("aws.folders.resume"), fileName);
    return fileUrl;
  }

  async buildS3ObjectURL(clientName, objectTypeFolderName, fileName) {
    if (fileName) {
      return `${config.get("aws.s3_url")}/${clientName}/${objectTypeFolderName}/${fileName}`;
    }
    return null;
  }
}

export default () => new S3BucketFileUploader();