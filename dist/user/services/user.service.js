"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.map = new Map();
    }
    getAll() {
        return Array.from([...this.map.values()]);
    }
    get(id) {
        return this.map.get(+id);
    }
    create(user) {
        const arr = [...this.map.values()];
        let existingUser = false;
        arr.forEach((person) => {
            if (person.email === user.email)
                existingUser = true;
        });
        if (existingUser)
            return null;
        return this.map.set(+user.id, user);
    }
    update(id, user) {
        const person = this.map.get(+id);
        this.map.set(+id, user);
        return person;
    }
    delete(id) {
        const user = this.map.get(+id);
        this.map.delete(+id);
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map