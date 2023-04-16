const db = require("../database/models");

module.exports = {
    getAllActors : async () => {
        try {

            const actors = await db.Actor.findAll();

            return actors

        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getOneActor: async (id) => {
        try {

            const actor = await db.Actor.findByPk(id);

            return actor;
            
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    createActor : async (data) => {
        try {
            const newActor = db.Actor.create({
                ...data
            });
            return newActor
            
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    }
}