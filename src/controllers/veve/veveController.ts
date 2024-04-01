import vevePoi from "../../models/veveModel";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

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
  console.log(req.body);
    try {
      await vevePoi.create(
        req.body.name,
        req.body.description,
        req.body.lat,
        req.body.lng,
        req.body.image
      );
      res.status(201).send("Created");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async update(req: any, res: any) {
    try {
      await vevePoi.update(
        req.params.id,
        req.body.name,
        req.body.description,
        req.body.latitude,
        req.body.longitude,
        req.body.image
      );
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
      const data = await vevePoi.findByName(req.params.name);
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

  async cloudinaryUpload(req: any, res: any) {
    try {
      // Récupérer le chemin du fichier à partir de la requête
      const filePath = req.file.path;

      if (!filePath) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Télécharger le fichier vers Cloudinary
      const result = await cloudinary.uploader.upload(filePath);
      console.log(result);

      // Supprimer le fichier temporaire après téléchargement
      fs.unlinkSync(filePath);

      // Envoyer la réponse avec l'URL sécurisée de l'image téléchargée
      return res
        .status(200)
        .json({
          message: "Image uploaded successfully",
          imageUrl: result.secure_url,
        });
    } catch (error) {
      console.error("Error uploading image:", error);
      return res
        .status(500)
        .json({ error: "An error occurred during image upload" });
    }
  },

  async updateImgUrl(req: any, res: any) {
    try {
      await vevePoi.setImg(req.params.id, req.body.url, req.body.name);
      res.status(200).send("Updated");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

export default veveController;
