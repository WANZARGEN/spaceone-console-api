import express from 'express';
import asyncHandler from 'express-async-handler';

import { processUploadFile, revertUploadFile } from '@controllers/add-ons/file';
const router = express.Router();

const controllers = [
    { url: '/upload/process', func: processUploadFile, method: 'post' },
    { url: '/upload/revert', func: revertUploadFile, method: 'post' }
];


controllers.forEach((config) => {
    router[config.method](config.url, asyncHandler(async (req, res) => {
        if (config.url === '/process') await config.func(req, res);
        else res.json(await config.func(req, res));
    }));
});

export default router;
