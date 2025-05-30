<template>
	<div class="events-page">
		<section class="hero-section">
			<div class="container">
				<h1>VusionGroup Events</h1>
			</div>
		</section>

		<section class="upcoming-events">
			<div class="container">
				<div class="events-grid">
					<div class="event-card" v-for="event in upcomingEvents" :key="event.id">
						<div class="event-image">
							<img :src="event.image" :alt="event.title">
						</div>
						<div class="event-content">
							<h3>{{ event.title }}</h3>
							<div class="event-details">
								<p class="date">{{ event.date }}</p>
								<p class="location">{{ event.location }}</p>
							</div>
							<a :href="event.link" class="btn btn-primary">Learn More</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="event-calendar">
			<div class="container">
				<h2>Don't miss our presence at upcoming events!</h2>
				<div class="calendar-filters">
					<div class="filter-group">
						<label>Industry</label>
						<select v-model="selectedIndustry">
							<option value="">All Industries</option>
							<option v-for="industry in industries" :key="industry" :value="industry">
								{{ industry }}
							</option>
						</select>
					</div>
					<div class="filter-group">
						<label>Country</label>
						<select v-model="selectedCountry">
							<option value="">All Countries</option>
							<option v-for="country in countries" :key="country" :value="country">
								{{ country }}
							</option>
						</select>
					</div>
				</div>
			</div>
		</section>

		<section class="event-map">
			<div class="container">
				<h2>Visualize our presence at next events on the map</h2>
				<div class="map-container">
					<!-- Map component will be added here -->
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'EventsView',
	data() {
		return {
			upcomingEvents: [
				{
					id: 1,
					title: 'World Retail Congress 2025',
					date: 'May 12, 2025 - May 14, 2025',
					location: 'London, United Kingdom',
					image: '/images/events/world-retail-congress.jpg',
					link: '#'
				},
				{
					id: 2,
					title: 'Viva Technology 2025',
					date: 'June 11, 2025 - June 14, 2025',
					location: 'Paris Expo Porte de Versailles',
					image: '/images/events/viva-tech.jpg',
					link: '#'
				}
			],
			selectedIndustry: '',
			selectedCountry: '',
			industries: ['DIY', 'Liquor', 'Pharmacy', 'Retail'],
			countries: [
				'Australia',
				'Canada',
				'Germany',
				'Italy',
				'Sweden',
				'United Arab Emirates',
				'United Kingdom',
				'United States'
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.events-page {
	.hero-section {
		background-color: var(--primary-color);
		color: white;
		padding: 4rem 0;
		text-align: center;

		h1 {
			font-size: 2.5rem;
			margin: 0;
		}
	}

	.upcoming-events {
		padding: 4rem 0;

		.events-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 2rem;
		}

		.event-card {
			background: white;
			border-radius: 8px;
			overflow: hidden;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			transition: transform 0.3s ease;

			&:hover {
				transform: translateY(-5px);
			}

			.event-image {
				height: 200px;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.event-content {
				padding: 1.5rem;

				h3 {
					margin: 0 0 1rem;
					font-size: 1.25rem;
				}

				.event-details {
					margin-bottom: 1.5rem;

					.date,
					.location {
						margin: 0.5rem 0;
						color: var(--text-secondary);
					}
				}
			}
		}
	}

	.event-calendar {
		padding: 4rem 0;
		background-color: var(--background-light);

		h2 {
			text-align: center;
			margin-bottom: 2rem;
		}

		.calendar-filters {
			display: flex;
			justify-content: center;
			gap: 2rem;
			margin-bottom: 2rem;

			.filter-group {
				label {
					display: block;
					margin-bottom: 0.5rem;
					font-weight: 500;
				}

				select {
					padding: 0.5rem;
					border: 1px solid var(--border-color);
					border-radius: 4px;
					min-width: 200px;
				}
			}
		}
	}

	.event-map {
		padding: 4rem 0;

		h2 {
			text-align: center;
			margin-bottom: 2rem;
		}

		.map-container {
			height: 400px;
			background-color: var(--background-light);
			border-radius: 8px;
		}
	}
}
</style>