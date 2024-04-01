import VevePoi from '../models/veveModel';
import { Request, Response } from 'express';

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET 
});

async function swapImg(img: any, name:string, id: string, req: Request, res: Response) {
  const imageFile: any = img;

  try {
    const cloudinaryResponse = await cloudinary.uploader.upload(imageFile, { tags: 'basic_sample', public_id:  name + id  });
    const imageURL: string = cloudinaryResponse.secure_url;

    await VevePoi.setImg(parseInt(id, 10), imageURL);

    res.status(200).send("Updated");
  } catch (err) {
    res.status(500).json(err);
  }
}

export default swapImg;