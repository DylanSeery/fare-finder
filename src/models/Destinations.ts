export interface Destination {
	code: string;
	name: string;
	seoName: string;
	aliases: string[];
	base: boolean;
	city: City;
	region: Region;
	country: Country;
	coordinates: Coordinates;
	timeZone: string;
}

interface City {
	name: string;
	code: string;
}

interface Region {
	name: string;
	code: string;
}

interface Country {
	code: string;
	iso3code: string;
	name: string;
	currency: string;
	defaultAirportCode: string;
	schengen: boolean;
}

interface Coordinates {
	latitude: number;
	longitude: number;
}
