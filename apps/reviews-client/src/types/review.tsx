import { Company } from './company';
import { User } from './user';

export interface Review {
	id: string;
	reviewerId: string;
	companyId: string;
	reviewText: string;
	rating: number;
	createdOn: string;
	user: User;
	company: Company;
}
