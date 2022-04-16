
import EntityStatus from "../constants/EntityStatus.js";

class MongooseWhereCluaseHelper {

  // will active and inactive any entity if they are not deleted
  updateEntityStatusById(entityId, status) {
    return this.findOneAndUpdate({ _id: entityId, status: { $ne: EntityStatus.DELETED } }, { status }, { new: true });
  }

  updateEntityById(entityId, payload) {
    return this.findOneAndUpdate({ _id: entityId, status: EntityStatus.ACTIVE }, payload, { new: true });
  }

  // will use it to return the list with paginatin
  getList() {

  }

  getAdminList() {

  }
}

export default new MongooseWhereCluaseHelper();