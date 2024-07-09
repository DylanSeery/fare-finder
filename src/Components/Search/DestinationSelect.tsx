import { useEffect, useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import axios from "axios";
import type { Destination } from "../../models/Destinations";

const DestinationSelect = ({
	updateDestination,
}: { updateDestination: (x: string) => void }) => {
	const [activeDestinations, setActiveDestinations] = useState<Destination[]>(
		[],
	);
	const [destination, setDestination] = useState<string>("");

	useEffect(() => {
		const getDestinations = async () => {
			try {
				const response = await axios.get(
					"https://www.ryanair.com/api/views/locate/5/airports/en/active",
				);
				setActiveDestinations(response.data);
			} catch (error) {
				console.error("Failed to fetch flight data");
			}
		};
		const getDefaultDestination = async () => {
			try {
				const response = await axios.get(
					"https://www.ryanair.com/api/geoloc/v5/nearbyAirports?market=en-gb",
				);
				setDestination(response.data[0].code);
				updateDestination(response.data[0].code);
			} catch (error) {
				console.error("Failed to fetch flight data");
			}
		};

		getDefaultDestination();
		getDestinations();
	}, [updateDestination]);

	const handleSelect = (newDestination: string) => {
		setDestination(newDestination);
		updateDestination(newDestination);
	};

	return (
		<>
			<Select value={destination} onValueChange={handleSelect}>
				<SelectGroup className="w-full">
					<SelectLabel>Destination</SelectLabel>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{activeDestinations.map((destination) => (
							<SelectItem key={destination.code} value={destination.code}>
								{destination.name}
							</SelectItem>
						))}
					</SelectContent>
				</SelectGroup>
			</Select>
		</>
	);
};

export default DestinationSelect;
