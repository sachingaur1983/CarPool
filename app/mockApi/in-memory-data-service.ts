import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

    createDb(){
        let userInfo = [
            {id: 1, firstName: 'shiv', lastName: 'narr', email: 'shiv_narr@yahoo.com', password:'5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8'}
        ];
        return { userInfo };
    }
}