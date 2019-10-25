const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: "hclrafapv",
    api_key: "568959517744279",
    api_secret: "yYbYsfUzQcY3WlsmE844b0cctj4"
});

cloudinary.uploader.upload("./client/public/uploads/190222153008-15-pet-friendly-hotels-le-bristol-paris.jpg", res => {
    console.log(res.url);
});
