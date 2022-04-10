
import EntityStatus from "../constants/EntityStatus.js";

class MongooseWhereCluaseHelper {

  // will active and inactive any entity if they are not deleted
  updateEntityStatusById(entityId, status) {
    return this.findOneAndUpdate({ _id: entityId, status: { $ne: EntityStatus.DELETED } }, { status }, { new: true });
  }

  //
  getList() {

  }
}

export default new MongooseWhereCluaseHelper();