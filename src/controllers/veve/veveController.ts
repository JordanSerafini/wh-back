import vevePoi from "../../models/veveModel";
import swapImg from "../../services/cloudinary";

const veveController = {
    async getAll(req: any, res: any) {
        try {
            const data = await vevePoi.all();
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getOne(req: any, res: any) {
        try {
            const data = await vevePoi.find(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async create(req: any, res: any) {
        try {
            await vevePoi.create(req.body.nom, req.body.description, req.body.latitude, req.body.longitude, req.body.image);
            res.status(201).send("Created");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async update(req: any, res: any) {
        try {
            await vevePoi.update(req.params.id, req.body.nom, req.body.description, req.body.latitude, req.body.longitude, req.body.image);
            res.status(200).send("Updated");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async delete(req: any, res: any) {
        try {
            await vevePoi.delete(req.params.id);
            res.status(200).send("Deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getByName(req: any, res: any) {
        try {
            const data = await vevePoi.findByNom(req.params.nom);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getByOwner(req: any, res: any) {
        try {
            const data = await vevePoi.findByOwner(req.params.owner);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getByRate(req: any, res: any) {
        try {
            const data = await vevePoi.findByRate(req.params.rate);
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async swapImg(req: any, res: any) {
        try {
            await swapImg(req.body.image, req.body.name, req.params.id, req, res);
        } catch (err) {
            res.status(500).json(err);
        }
    }

};

export default veveController;