import Utilisateur from "../models/utilisateurModel";

const utilisateurController = {
    async getAll(req: any, res: any) {
        try {
            const data = await Utilisateur.all();
            res.json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

export default utilisateurController;