

export const  makeGrpcQuery =  ({domain_id,sort})=>{
    return  {
        domain_id,
        'query':{
            sort
        }
    };
};