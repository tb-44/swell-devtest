import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import WebFont from 'webfontloader';
import Header from './components/header/header';
import ReviewsList from './components/reviews-list/reviews-list';
import { theme } from './theme';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';

WebFont.load({
	google: {
		families: ['Montserrat:500,600,700'],
	},
});

export function App() {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const getReviews = async () => {
		try {
			const response = await axios.get('/api/reviews');
			setReviews(response.data.reviews);
			setLoading(false);
		} catch (err) {
			console.error('Error fetching reviews:', err);
			setError((err as Error).message);
			setLoading(false);
		}
	};

	useEffect(() => {
		getReviews();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container sx={{ mt: 2, typography: 'body1' }}>
				{error ? (
					<Alert severity="error" icon={<TaskIcon />}>
						Error fetching reviews. Please try again later.
					</Alert>
				) : (
					<ReviewsList reviews={reviews} />
				)}
			</Container>
		</ThemeProvider>
	);
}

export default App;
