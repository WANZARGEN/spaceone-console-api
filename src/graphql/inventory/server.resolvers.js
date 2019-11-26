import casual from '../server-model';
import {arrayOf} from '../casual';
import {listServers} from '../../controllers/inventory/server';
const domain_id = 'domain-b915bdad8ae0';
export default {
    Query:{
        servers: () => {
            // debugger;
            // const result = listServers({domain_id});
            // return  result;
            return arrayOf(casual.integer(1, 3), casual._server);
        },
        server: (_) => {
            return casual.server;
        }
    }
};
