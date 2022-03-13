
import multer from "multer";

class MulterUploader {

  multerStorageConfig = multer.diskStorage({
    filename(req, file, cb) {
      const extension = file.originalname.split(".").pop();
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}.${extension}`;
      cb(null, `${file.fieldname}-${uniqueSuffix}`);
    },
  })

  multerUpload = multer({ storage: this.multerStorageConfig });

  upload(middlewareOptions) {
    const fileKey = middlewareOptions?.fileKey || "file";
    return this.multerUpload.single(fileKey);
  }

}

export default new MulterUploader();