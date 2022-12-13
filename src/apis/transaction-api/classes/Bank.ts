import IClients from '../interfaces/IClients';

class Bank {
    ag: string;
    name: string;
    manager: {
        uid: string;
        name: string;
        password: string;
    };
    clients: Array<IClients>;
    constructor() {
        this.ag = '001';
        this.name = 'JamesBank';
        this.manager = {
            uid: '19isjw-isjdju-b66373-abha990',
            name: 'james',
            password: '123456',
        };
        this.clients = [];
    }
}

const jamesBank = new Bank();

export default jamesBank;
