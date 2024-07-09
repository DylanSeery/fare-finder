import { useState, useEffect } from "react";
import axios from "axios";
import type { IFlight } from "../../models/Flight";
import Flight from "./Flight";

const FlightWrapper = ({
	departure,
	outboundDeparture,
	inboundDeparture,
}: {
	departure: string;
	outboundDeparture: string;
	inboundDeparture: string;
}) => {
	const [flights, setFlights] = useState<IFlight[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	console.log(departure, outboundDeparture, inboundDeparture);

	useEffect(() => {
		const fetchFlights = async () => {
			try {
				const response = await axios.get(
					"https://www.ryanair.com/api/farfnd/v4/roundTripFares",
					{
						params: {
							departureAirportIataCode: departure,
							market: "en-gb",
							adultPaxCount: 1,
							outboundDepartureDateFrom: outboundDeparture,
							outboundDepartureDateTo: outboundDeparture,
							inboundDepartureDateFrom: inboundDeparture,
							inboundDepartureDateTo: inboundDeparture,
							currency: "EUR",
							priceValueTo: 1000,
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
	}, [departure, inboundDeparture, outboundDeparture]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className="mt-2 flight-wrapper">
			{flights.map((flight) => (
				<Flight key={flight.inbound.flightNumber} flight={flight} />
			))}
		</div>
	);
};

export default FlightWrapper;
