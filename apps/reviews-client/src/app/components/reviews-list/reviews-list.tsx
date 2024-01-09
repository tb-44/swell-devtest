import { Alert, Card, Typography } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import { Review } from '../../../types/review';

interface ReviewsListProps {
	reviews: Review[];
}

export function ReviewsList({ reviews }: ReviewsListProps) {
	return (
		<div>
			{reviews.length === 0 ? (
				<Alert severity="info" icon={<TaskIcon />}>
					No reviews available
				</Alert>
			) : (
				reviews.map((review) => (
					<Card key={review.id} variant="outlined" sx={{ mb: 1, p: 1 }}>
						<Typography variant="h3">
							{review.user.firstName} {review.user.lastName}
						</Typography>
						<Typography variant="h3" sx={{ color: '#E11879' }}>
							{review.company.name}
						</Typography>
						<Typography variant="body1" sx={{ color: '#5E6166' }}>
							{review.reviewText}
						</Typography>
						<Typography variant="body1">
							Date: {new Date(review.createdOn).toLocaleDateString()}
						</Typography>
						<Typography variant="body1">Rating: {review.rating}</Typography>
					</Card>
				))
			)}
		</div>
	);
}

export default ReviewsList;
