import { Client, Storage, ID, Query } from "appwrite";
import conf from '../conf/conf.js'


export class StorageService {
    client = new Client();
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.bucket = new Storage(this.client);
    }

     // file upload service 
     async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log('Appwrite service :: uploadFile:: error', error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error', error);
            return false
        }
    }

    getFilePreview (fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const storageService = new StorageService();
export default storageService;