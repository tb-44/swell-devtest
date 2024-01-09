import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ReviewsResponse } from './reviews.types';

@Injectable()
export class ReviewsService {
	constructor(private prisma: DatabaseService) {}

	getReviewsCount() {
		return this.prisma.review.count();
	}

	async getAllReviews(): Promise<ReviewsResponse> {
		const reviews = await this.prisma.review.findMany({
			include: {
				user: true,
				company: true,
			},
			orderBy: {
				createdOn: 'desc',
			},
		});
		return { reviews } as ReviewsResponse;
	}
}
