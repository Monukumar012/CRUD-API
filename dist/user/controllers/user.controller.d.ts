import { UserService } from "../services/user.service";
import { createUserDto, updateUserDto } from "../dto/user.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): {
        message: string;
        success: boolean;
        users: any;
    };
    getUser(id: number): {
        message: string;
        success: boolean;
        user?: undefined;
    } | {
        message: string;
        success: boolean;
        user: any;
    };
    createUser(createUserData: createUserDto): {
        message: string;
        success: boolean;
        user?: undefined;
    } | {
        message: string;
        success: boolean;
        user: createUserDto;
    };
    updateUser(id: number, updateUserData: updateUserDto): {
        message: string;
        success: boolean;
        user?: undefined;
    } | {
        message: string;
        success: boolean;
        user: updateUserDto;
    };
    deleteUser(id: number): {
        message: string;
        success: boolean;
        user?: undefined;
    } | {
        message: string;
        success: boolean;
        user: any;
    };
}
