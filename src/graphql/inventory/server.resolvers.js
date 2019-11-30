import casual from '../server-model';
import {listServers} from '../../controllers/inventory/server';
import {makeGrpcQuery } from '../core/core';

export default {
    Query:{
        servers:  async (parent,args,{request},context) => {
            console.log('인자값',args);
            const resp = await listServers(makeGrpcQuery(args));
            // console.log('result',resp.results);
            return  resp.results;
        },
        server: (parent,args,ctx,info) => {
            return casual.server;
        }
    }
};
