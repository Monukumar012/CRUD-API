"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const user_dto_1 = require("../dto/user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers() {
        const users = this.userService.getAll();
        return {
            message: "All Users",
            success: true,
            users,
        };
    }
    getUser(id) {
        const user = this.userService.get(id);
        if (!user) {
            return {
                message: `User not exists with id ${id}`,
                success: false,
            };
        }
        return {
            message: `User with id ${id} founded`,
            success: true,
            user,
        };
    }
    createUser(createUserData) {
        const user = this.userService.create(createUserData);
        if (!user) {
            return {
                message: `User already exists with this email id`,
                success: false,
            };
        }
        return {
            message: "User Created Successfully",
            success: true,
            user: createUserData,
        };
    }
    updateUser(id, updateUserData) {
        if (!updateUserData.email && !updateUserData.id && !updateUserData.name && !updateUserData.password) {
            return {
                message: `Enter User Deatils for update`,
                success: false,
            };
        }
        const user = this.userService.update(id, updateUserData);
        if (!user) {
            return {
                message: `User not exists with id ${id}`,
                success: false,
            };
        }
        return {
            message: "User Updated Successfully",
            success: true,
            user: updateUserData,
        };
    }
    deleteUser(id) {
        const user = this.userService.delete(id);
        if (!user) {
            return {
                message: `User not exists with id ${id}`,
                success: false,
            };
        }
        return {
            message: "User Deleted Successfully",
            success: true,
            user: user,
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.createUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.updateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/api/v1/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map