export interface IFlight {
	outbound: Outbound;
	inbound: Inbound;
	summary: Summary;
}

interface Outbound {
	departureAirport: DepartureAirport;
	arrivalAirport: ArrivalAirport;
	departureDate: string;
	arrivalDate: string;
	price: Price;
	flightKey: string;
	flightNumber: string;
	previousPrice: string | null;
	priceUpdated: number;
}

interface DepartureAirport {
	countryName: string;
	iataCode: string;
	name: string;
	seoName: string;
	city: City;
}

interface City {
	name: string;
	code: string;
	countryCode: string;
}

interface ArrivalAirport {
	countryName: string;
	iataCode: string;
	name: string;
	seoName: string;
	city: City;
}

interface Price {
	value: number;
	valueMainUnit: string;
	valueFractionalUnit: string;
	currencyCode: string;
	currencySymbol: string;
}

interface Inbound {
	departureAirport: DepartureAirport;
	arrivalAirport: ArrivalAirport;
	departureDate: string;
	arrivalDate: string;
	price: Price;
	flightKey: string;
	flightNumber: string;
	previousPrice: string | null;
	priceUpdated: number;
}

interface Summary {
	price: Price;
	previousPrice: string | null;
	newRoute: boolean;
	tripDurationDays: number;
}
