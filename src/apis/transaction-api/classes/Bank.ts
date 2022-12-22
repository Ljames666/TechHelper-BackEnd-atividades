import IClients from '../interfaces/IClients';
import Client from './Client';

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

    addClientToArray(client: Client) {
        this.clients.push(client);
    }

    existCpf(cpf: string) {
        return this.clients.some((client) => client.cpf === cpf);
    }

    findClientById(id: string) {
        return this.clients.find((client) => client.uid === id);
    }

    modifiedClientBy(id: string, name: string, cpf: string, email: string, age: number) {
        const client = this.findClientById(id);
        if (!client) {
            return { status: 404, message: 'Not found' };
        }
        client.name = name;
        client.cpf = cpf;
        client.email = email;
        client.age = age;
        return { status: 200, message: 'OK', JSON: client };
    }
}

const jamesBank = new Bank();

export default jamesBank;
