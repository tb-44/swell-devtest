import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';

const mockReviews = [
	{
		id: 'id1',
		reviewerId: 'user1',
		companyId: 'company1',
		reviewText: 'Amazing Job',
		rating: 5,
		createdOn: '2022-01-01T00:00:00.000Z',
		user: {
			id: 'user1',
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@test.com',
		},
		company: {
			id: 'company1',
			name: 'Test Co1',
		},
	},
	{
		id: 'id2',
		reviewerId: 'user2',
		companyId: 'company2',
		reviewText: 'Great service',
		rating: 4,
		createdOn: '2022-01-02T00:00:00.000Z',
		user: {
			id: 'user2',
			firstName: 'Jane',
			lastName: 'Doe',
			email: 'jane@test.com',
		},
		company: {
			id: 'company2',
			name: 'Test Co2',
		},
	},
];
describe('ReviewsList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ReviewsList reviews={mockReviews} />);
		expect(baseElement).toBeTruthy();
	});

	it('should render list of reviews', () => {
		render(<ReviewsList reviews={mockReviews} />);
		const reviewItems = screen.getAllByText(/Rating:/);
		expect(reviewItems.length).toEqual(mockReviews.length);

		const definedRating = screen.getByText('Rating: 5');
		expect(definedRating).toBeInTheDocument();
	});

	it('should display message if no reviews are found', () => {
		render(<ReviewsList reviews={[]} />);
		const message = screen.getByText(/No reviews available/);
		expect(message).toBeInTheDocument();
	});

	it('should display the review text if provided', () => {
		render(<ReviewsList reviews={mockReviews} />);
		const reviewText = screen.getByText(mockReviews[0].reviewText);
		expect(reviewText).toBeInTheDocument();
	});
});
