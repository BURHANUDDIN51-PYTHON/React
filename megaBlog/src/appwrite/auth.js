import {Client, Account, ID} from 'appwrite';
import conf from '../conf/conf';

export class AuthServices {
    
    // Create a client
    client = new Client();
    // Create a account using client
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                // Log in the user
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error){
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch (error){
            throw error;
        }
    }

    // Check whether the user is logged in
    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error){
            console.log('Appwrite services :: getCurrentUser :: error :: ', error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log('Appwrite services :: logout :: error', error)
        }
        
    }
}

const authService = new AuthServices();

export default authService