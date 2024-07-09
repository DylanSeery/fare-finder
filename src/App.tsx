import { useMemo, useState } from "react";
import SearchWrapper from "./Components/Search/SearchWrapper";
import type { SearchInformation } from "./models/Default";
import FlightSearch from "./Components/FlightSearch/FlightWrapper";

function App() {
	const [searchInformation, setSearchInformation] = useState<SearchInformation>(
		{
			departure: "",
			date: {
				from: "",
				to: "",
			},
		},
	);

	const validSearch = useMemo(() => {
		return (
			searchInformation.departure !== "" &&
			searchInformation.date.from !== "" &&
			searchInformation.date.to !== ""
		);
	}, [searchInformation]);

	return (
		<div className="h-svh max-w-[400px] pl-2 pr-2 m-auto">
			<SearchWrapper setSearchInformation={setSearchInformation} />
			{validSearch && (
				<FlightSearch
					departure={searchInformation.departure}
					outboundDeparture={searchInformation.date.from}
					inboundDeparture={searchInformation.date.to}
				/>
			)}
		</div>
	);
}

export default App;
