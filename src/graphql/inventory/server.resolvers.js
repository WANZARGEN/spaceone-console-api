import casual from '../server-model';
import {arrayOf} from '../casual';
import {listServers} from '../../controllers/inventory/server';
import {json} from 'express';
export default {
    Query:{
        servers: async (a,args,{request},context) => {
            const result = await listServers(args);
            return  result.results;
            // return arrayOf(casual.integer(1, 3), casual._server);
        },
        server: (_) => {
            return casual.server;
        }
    }
};
