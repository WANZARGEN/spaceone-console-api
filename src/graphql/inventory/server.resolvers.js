import casual from '../server-model';
import {arrayOf} from '../casual';
import {listServers} from '../../controllers/inventory/server';
import {json} from 'express';
const domain_id = 'domain-9a817e7aeed7';
export default {
    Query:{
        servers: async (a,b,{request},context) => {
            const parm ={
                domain_id: domain_id
            };

            const result = await listServers(parm);
            return  result.results;
            // return arrayOf(casual.integer(1, 3), casual._server);
        },
        server: (_) => {
            return casual.server;
        }
    }
};
