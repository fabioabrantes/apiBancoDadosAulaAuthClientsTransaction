import {Router} from 'express';

//middleware
import {verifyAuthorization} from '../middlewares/verifyAuthorization';

//controllers
import {RegisterClientController} from '../controllers/RegisterClientController';
import { DeleteClientController } from '../controllers/DeleteClientController';
import { FindAllClientsController } from '../controllers/FindAllClientsController';
import { AuthenticateClientController } from '../controllers/AuthenticateClientController';


const routesClients = Router();

const authenticateClientController = new AuthenticateClientController();
routesClients.post('/users/session',authenticateClientController.handle);

const registerClientController = new RegisterClientController();
routesClients.post('/users',registerClientController.handle);

const deleteClientController = new DeleteClientController();
routesClients.delete('/clientsAccount',verifyAuthorization, deleteClientController.handle);

const findAllClientsController = new FindAllClientsController();
routesClients.get('/account/alls', findAllClientsController.handle);

export {routesClients}