export class brokerrs
{
    id : number;
    name : string;
    city  : string;
    addr : string;
    mob : number;
    psw  : string;
}


export class customer
{
    
    id : number;
    broker_id : any;
    name : string;
    mob : number;
    psw  : string;
}


export class pointss
{
    id : number;
    points : string;
    datee : string;
    cus_id : any;
}