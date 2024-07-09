import type React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import type { Fare } from "../models/Flight";

const FlightSearch: React.FC = () => {
	const [flights, setFlights] = useState<Fare[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchFlights = async () => {
			try {
				const response = await axios.get(
					"https://www.ryanair.com/api/farfnd/v4/roundTripFares",
					{
						params: {
							departureAirportIataCode: "DUB",
							market: "en-gb",
							adultPaxCount: 1,
							outboundDepartureDateFrom: "2024-07-10",
							outboundDepartureDateTo: "2024-07-10",
							inboundDepartureDateFrom: "2024-07-11",
							inboundDepartureDateTo: "2024-07-11",
						},
					},
				);
				setFlights(response.data.fares);
				setLoading(false);
			} catch (error) {
				setError("Failed to fetch flight data");
				setLoading(false);
			}
		};

		fetchFlights();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>Available Flights</h1>
			<ul>
				{flights.map((flight) => (
					<li key={flight.inbound.flightNumber}>
						<p>
							{flight.outbound.departureAirport.name} to{" "}
							{flight.outbound.arrivalAirport.name} on{" "}
							{new Date(flight.outbound.departureDate).toDateString()}
						</p>
						<p>
							{flight.inbound.departureAirport.name} to{" "}
							{flight.inbound.arrivalAirport.name} on{" "}
							{new Date(flight.inbound.departureDate).toDateString()}
						</p>
						<p>Price: €{flight.summary.price.value}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FlightSearch;
