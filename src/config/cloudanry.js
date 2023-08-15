import {v2 as cloudinary} from 'cloudinary';

const api_key = '443364596599546';
const api_secret = 'dRrscZioGSmEySu6W3jOm_9Wr3Y';
const cloud_name = 'deb3kihjs';
          
 cloudinary.config({ 
  cloud_name, 
  api_key, 
  api_secret
});

export const cloudinaryBucket = cloudinary