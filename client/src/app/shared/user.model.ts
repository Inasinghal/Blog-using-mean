export interface IUser {
    name?: string;
    email?: string;
    password?: string
}

export class User implements IUser {
    name?: string;
    email?: string;
    password?: string

    constructor(user?: IUser) {
        if(user) {
            this.name = user.name;
            this.email = user.email;
            this.password = user.password;
        }
    }
}