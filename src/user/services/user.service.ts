import { Injectable } from "@nestjs/common";
import { findIndex } from "rxjs";

interface User{
    id:number
    name:string
    email:string
    password:string
}

@Injectable()
export class UserService{

    private map =  new Map<number,User>();

    getAll() : any{
        return Array.from([...this.map.values()]);
    }
    get(id) : any{
        return this.map.get(+id);
    }
    create(user): any{
        const arr= [...this.map.values()]
        let existingUser=false;
        arr.forEach((person)=>{
            if(person.email===user.email)existingUser=true;
        })
        if(existingUser)return null;

        return this.map.set(+user.id, user);
    }
    update(id,user):any{
        const person = this.map.get(+id);
        this.map.set(+id, user);
        return person;
    }
    delete(id):any{
        const user = this.map.get(+id);
        this.map.delete(+id);
        return user;
    }
}