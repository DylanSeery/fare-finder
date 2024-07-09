export interface Fare {
	outbound: Outbound;
	inbound: Inbound;
	summary: Summary;
}

export interface Outbound {
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

export interface DepartureAirport {
	countryName: string;
	iataCode: string;
	name: string;
	seoName: string;
	city: City;
}

export interface City {
	name: string;
	code: string;
	countryCode: string;
}

export interface ArrivalAirport {
	countryName: string;
	iataCode: string;
	name: string;
	seoName: string;
	city: City;
}

export interface Price {
	value: number;
	valueMainUnit: string;
	valueFractionalUnit: string;
	currencyCode: string;
	currencySymbol: string;
}

export interface Inbound {
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

export interface Summary {
	price: Price;
	previousPrice: string | null;
	newRoute: boolean;
	tripDurationDays: number;
}
