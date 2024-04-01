
const cloudinary = require("cloudinary").v2;
// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


async function uploadImage(imagePath: any) {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.public_id;
    } catch (error) {
        console.error(error);
    }
};

/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
const getAssetInfo = async (publicId:any) => {

  // Return colors in the response
  const options = {
    colors: true,
  };

  try {
      // Get details about the asset
      const result = await cloudinary.api.resource(publicId, options);
      console.log(result);
      return result.colors;
      } catch (error) {
      console.error(error);
  }
};

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////
const createImageTag = (publicId: any, ...colors:any) => {

  // Set the effect color and background color
  const [effectColor, backgroundColor] = colors;

  // Create an image tag with transformations applied to the src URL
  let imageTag = cloudinary.image(publicId, {
    transformation: [
      { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
      { radius: 'max' },
      { effect: 'outline:10', color: effectColor },
      { background: backgroundColor },
    ],
  });

  return imageTag;
};

export {  uploadImage, getAssetInfo, createImageTag};
