import { Card } from "../ui/card";
import type { IFlight } from "../../models/Flight";
import { getTimeDifference, getTimeFromDate } from "../../lib/utils";
import { Button } from "../ui/button";

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
				<div className="flex justify-between mt-1 font-bold text-primary">
					<span className="flex flex-col">
						{getTimeFromDate(new Date(flight.outbound.departureDate))}
					</span>
					<span className="text-right flex flex-col">
						{getTimeFromDate(new Date(flight.outbound.arrivalDate))}
					</span>
				</div>
			</div>
			<hr className="mt-1 mb-1" />
			<div className="pl-1 pr-1">
				<div className="grid grid-cols-3">
					<span className="flex flex-col">
						{flight.inbound.departureAirport.iataCode}
						<small>{flight.inbound.departureAirport.name}</small>
					</span>
					<span className="text-center flex flex-col text-primary justify-end">
						{getTimeDifference(
							new Date(flight.inbound.departureDate),
							new Date(flight.inbound.arrivalDate),
						)}
					</span>
					<span className="text-right flex flex-col">
						{flight.inbound.arrivalAirport.iataCode}
						<small>{flight.inbound.arrivalAirport.name}</small>
					</span>
				</div>
				<div className="flex justify-between mt-1 font-bold text-primary">
					<span className="flex flex-col">
						{getTimeFromDate(new Date(flight.inbound.departureDate))}
					</span>
					<span className="text-right flex flex-col">
						{getTimeFromDate(new Date(flight.inbound.arrivalDate))}
					</span>
				</div>
			</div>
			<Button variant="ghost" className="w-full">
				{flight.outbound.price.currencySymbol}
				{flight.outbound.price.value}
			</Button>
		</Card>
	);
};

export default Flight;
