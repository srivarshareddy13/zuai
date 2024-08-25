import grid from 'gridfs-stream'
import mongoose from 'mongoose';

const url = 'http://localhost:8000'

const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucket
    })
})

export const uploadImage = (request,response) => {
    if (!request.file) {
        return response.status(404).json({msg: 'File not found'});
    }

    const imageUrl = `${url}/file/${request.file.filename}`;

    return response.status(200).json(imageUrl);
}

export const getImage = (request,response) => {
    if (!request.file) {
        return response.status(404).json({msg: 'File not found'});
    }

    const imageUrl = `${url}/file/${request.file.filename}`;

    return response.status(200).json(imageUrl);
}

