/* eslint-disable no-param-reassign */

import EntityStatus from "../constants/EntityStatus.js";

class MongooseWhereCluaseHelper {

  // will active and inactive any entity if they are not deleted
  updateEntityStatusById(entityId, status) {
    return this.findOneAndUpdate({ _id: entityId, status: { $ne: EntityStatus.DELETED } }, { status }, { new: true });
  }

  updateEntityStatus(query, status) {
    const findOneAndUpdateQuery = { status: { $ne: EntityStatus.DELETED }, ...query };
    return this.findOneAndUpdate(findOneAndUpdateQuery, { status }, { new: true });
  }

  updateEntityById(entityId, payload) {
    return this.findOneAndUpdate({ _id: entityId, status: EntityStatus.ACTIVE }, payload, { new: true });
  }

  updateEntity(query, payload) {
    const findOneAndUpdateQuery = { status: EntityStatus.ACTIVE, ...query };
    return this.findOneAndUpdate(findOneAndUpdateQuery, payload, { new: true });
  }

  deleteEntityById(entityId, payload) {
    return this.findOneAndUpdate({ _id: entityId, status: EntityStatus.ACTIVE }, payload, { new: true });
  }

  deleteEntity(query, payload) {
    const findOneAndUpdateQuery = { status: EntityStatus.ACTIVE, ...query };
    return this.findOneAndUpdate(findOneAndUpdateQuery, payload, { new: true });
  }

  // will use it to return the list with pagination and search
  async list(query) {
    const findQuery = { status: EntityStatus.ACTIVE, ...query };
    const count = await this.countDocuments(findQuery);
    let result = {};
    if (count > 0) {
      const page = query?.page ? query?.page : 1;
      const pageSize = query?.pageSize || 10;
      const skip = (page - 1) * query?.pageSize;
      const paginationParams = { sort: { _id: "desc" }, limit: pageSize, skip };
      delete query?.page;
      delete query?.pageSize;
      result = await this.find(findQuery).sort(paginationParams.sort).limit(paginationParams.limit).skip(paginationParams.skip);
      result = {
        data: result, total: count, page, pageSize,
      };
    }
    return result;
  }

  getAdminList() {

  }
}

export default new MongooseWhereCluaseHelper();