import { Card } from "../ui/card";
import type { IFlight } from "../../models/Flight";
import { getTimeDifference, getTimeFromDate } from "../../lib/utils";
import { Button } from "../ui/button";

const Flight = ({ flight }: { flight: IFlight }) => {
	const openRyanair = () => {
		window.open(
			`https://www.ryanair.com/ie/en/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=${new Date(flight.outbound.departureDate).toISOString().slice(0, 10)}dateIn=${new Date(flight.inbound.departureDate).toISOString().slice(0, 10)}&isReturn=true&discount=0&originIata=${flight.outbound.departureAirport.iataCode}&destinationIata=${flight.inbound.departureAirport.iataCode}&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=${new Date(flight.outbound.departureDate).toISOString().slice(0, 10)}&tpEndDate=${new Date(flight.inbound.departureDate).toISOString().slice(0, 10)}&tpDiscount=0&tpOriginIata=${flight.outbound.departureAirport.iataCode}&tpDestinationIata=${flight.inbound.departureAirport.iataCode}`,
			"_blank",
		);
	};

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
			<Button variant="ghost" className="w-full" onClick={openRyanair}>
				{flight.summary.price.currencySymbol}
				{flight.summary.price.value.toFixed(2)}
			</Button>
		</Card>
	);
};

export default Flight;
