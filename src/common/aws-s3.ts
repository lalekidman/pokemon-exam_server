import S3 from 'aws-sdk/clients/s3'
import fs from 'fs'
export interface uploadFiles {
  fieldName: string
  originalFilename: string
  path: string
  headers: object
  type: string
  fileName?: string
  size: number
}
class Uploader {
  private BucketName: string
  private s3Uploader!: S3
  constructor (bucketName:string = 'kyoo-test2') {
    this.BucketName = bucketName
    this.loadConfiguration()
  }
  public loadConfiguration () {
    const awsConfig = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_SECRET_KEY_ID || '',
      Bucket: this.BucketName
    }
    this.s3Uploader = new S3(awsConfig)
  }
  public setBucketName (bucketName: string) {
    this.BucketName = bucketName
    this.loadConfiguration()
    return this.BucketName
  }
  public upload (filepath: string, avatar: uploadFiles, ACL: string = 'public-read'): Promise<{imageUrl: string, fileName: string}> {
    const fileLoc = `${filepath}/${avatar.originalFilename}`
    const stream = fs.createReadStream(avatar.path)
    const obj = {
      Bucket: this.BucketName,
      Key: fileLoc,
      Body: stream,
      ContentType: avatar.type,
      ACL
    }
    return new Promise((resolve, reject) => {
      this.s3Uploader.upload(obj, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          const {Location: imageUrl = ''} = data
          resolve({
            // avatarUrl: imageUrl,
            fileName: avatar.originalFilename,
            imageUrl
          })
        }
        fs.unlink(avatar.path, () => {
          return true
        })
      })
    })
  }
  public multiUpload (filepath: string, files: uploadFiles[], ACL: string = 'public-read') {
    const obj = files.map(image => this.upload(filepath, image, ACL))
    return Promise.all(obj)
  }
  /**
   * fiel location
   * @param file 
   */
  public removeFile(file: string) {
    return new Promise((resolve,  reject) => {
      const params = {Bucket: this.BucketName, Key: file}
      this.s3Uploader.deleteObject(params, (error: any, data: any) => {
        if (error) {
          console.log(error)
          reject(error)
        }
        resolve(data)
      })
    })
  }
}

export default Uploader