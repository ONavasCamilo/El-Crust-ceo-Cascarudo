import { SECRET } from "../config/envs";
import jwt from 'jsonwebtoken'
import { User } from "../entities/User";

const session = {
    sign(user: User) {
        const token = jwt.sign({ id: user.id, role: user.role, shopcart: user.shopcart }, SECRET, { expiresIn: 86400 });
        return token;
    }
}

export default session;