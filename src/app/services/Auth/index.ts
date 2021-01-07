import { UserService } from './user.service';
import { OrderService } from './order.service';
import { UserContactService } from './userContact.service';
import { ContactService } from './contact.service';
export * from './user.service';

export const AUTH_SERVICES = [
    UserService,OrderService,UserContactService,ContactService
]
