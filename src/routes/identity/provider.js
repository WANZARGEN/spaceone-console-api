import express from 'express';
import asyncHandler from 'express-async-handler';
import * as provider from '@controllers/identity/provider';

const router = express.Router();
const controllers = [
    { url: '/create', func: provider.createProvider },
    { url: '/update', func: provider.updateProvider },
    { url: '/delete', func: provider.deleteProvider },
    { url: '/get', func: provider.getProvider },
    { url: '/list', func: provider.listProviders }
];

controllers.map((config) => {
    router.post(config.url, asyncHandler(async (req, res, next) => {
        res.json(await config.func(req.body));
    }));
});

export default router;