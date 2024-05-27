import { AppDataSource } from "../config/data-source";
import { Shopcart } from "../entities/Shopcart";
import { User } from "../entities/User";

const ShopcartModel = AppDataSource.getRepository(Shopcart).extend({
  async createShopcart(user: User) {
    const shopcart = new Shopcart();
    shopcart.user = user;
    await ShopcartModel.save(shopcart);
  },

  async addProduct() {

  }
});

export default ShopcartModel;
