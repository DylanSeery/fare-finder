import { Card } from "../ui/card";
import type { IFlight } from "../../models/Flight";
import { getTimeDifference } from "../../lib/utils";

const Flight = ({ flight }: { flight: IFlight }) => {
	return (
		<Card className="mb-1 mt-1 pt-2 pb-2 pl-1 pr-1">
			<div className="pl-1 pr-1">
				<div className="grid grid-cols-3">
					<span className="flex flex-col">
						{flight.outbound.departureAirport.iataCode}
						<small>{flight.outbound.departureAirport.name}</small>
					</span>
					<span className="text-center flex flex-col text-primary justify-end">
						{getTimeDifference(
							new Date(flight.outbound.departureDate),
							new Date(flight.outbound.arrivalDate),
						)}
					</span>
					<span className="text-right flex flex-col">
						{flight.outbound.arrivalAirport.iataCode}
						<small>{flight.outbound.arrivalAirport.name}</small>
					</span>
				</div>
			</div>
		</Card>
	);
};

export default Flight;
