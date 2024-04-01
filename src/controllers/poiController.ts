import Poi from "../models/poiModel";

const poiController = {
    async getAll(req: any, res: any) {
        try {
            const data = await Poi.all();
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getOne(req: any, res: any) {
        try {
            const data = await Poi.find(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async create(req: any, res: any) {
        try {
            await Poi.create(req.body.nom, req.body.description, req.body.latitude, req.body.longitude, req.body.image);
            res.status(201).send("Created");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async update(req: any, res: any) {
        try {
            await Poi.update(req.params.id, req.body.nom, req.body.description, req.body.latitude, req.body.longitude, req.body.image);
            res.status(200).send("Updated");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async delete(req: any, res: any) {
        try {
            await Poi.delete(req.params.id);
            res.status(200).send("Deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getByName(req: any, res: any) {
        try {
            const data = await Poi.findByNom(req.params.nom);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getByOwner(req: any, res: any) {
        try {
            const data = await Poi.findByOwner(req.params.owner);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    }

};

export default poiController;