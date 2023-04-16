const {validationResult} = require('express-validator');
const createResponseError = require("../helpers/createResponseError");
const {
  getAllActors,
  getOneActor,
  createActor,
} = require("../services/actorsServices");

module.exports = {
  list: async (req, res) => {
    try {
      const actors = await getAllActors();

      return res.status(200).json({
        ok: true,
        data: actors,
        meta: {
          status: 200,
          total: actors.length,
          url: "/api/actors",
        },
      });
    } catch (error) {
      return createResponseError(res, error);
      
    }
  },
  detail: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;

      const actor = await getOneActor(id);

      return res.status(200).json({
        ok: true,
        data: actor,
        meta: {
          status: 200,
          total: 1,
          url: `/api/actors/${id}`,
        },
      });
    } catch (error) {
      return createResponseError(res, error);
    }
  },
  store: async (req, res) => {
    try {
    } catch (error) {}
  },
  update: async (req, res) => {
    try {
    } catch (error) {}
  },
  destroy: async (req, res) => {
    try {
    } catch (error) {}
  },
};
