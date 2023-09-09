import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { createUserDto, updateUserDto } from "../dto/user.dto";

@Controller('/api/v1/users')
export class UserController{

    constructor(private userService:UserService){}

    @Get()
    getAllUsers(){
        const users =  this.userService.getAll()
        return {
            message : "All Users",
            success:true,
            users,
        }
        
    }

    @Get(':id')
    getUser(@Param('id') id:number){
        const user =  this.userService.get(id);
        if(!user){
            return {
                message : `User not exists with id ${id}`,
                success:false,
            }
        }

        return {
            message : `User with id ${id} founded`,
            success:true,
            user,
        }
    }


    @Post('create')
    createUser(@Body() createUserData:createUserDto){
        const user =  this.userService.create(createUserData);

        if(!user){
            return {
                message : `User already exists with this email id`,
                success:false,
            }
        }

        return {
            message : "User Created Successfully",
            success:true,
            user:createUserData,
        }
    }


    @Put('update/:id')
    updateUser(@Param('id') id:number, @Body() updateUserData:updateUserDto){

        if(!updateUserData.email && !updateUserData.id && !updateUserData.name && !updateUserData.password){
            return {
                message : `Enter User Deatils for update`,
                success:false,
            }
        }

        const user =  this.userService.update(id,updateUserData);
        if(!user){
            return {
                message : `User not exists with id ${id}`,
                success:false,
            }
        }
        return {
            message : "User Updated Successfully",
            success:true,
            user:updateUserData,
        }
    }

    @Delete('delete/:id')
    deleteUser(@Param('id') id:number){
        const user =  this.userService.delete(id);
        if(!user){
            return {
                message : `User not exists with id ${id}`,
                success:false,
            }
        }
        return {
            message : "User Deleted Successfully",
            success:true,
            user:user,
            
        }
    }
}