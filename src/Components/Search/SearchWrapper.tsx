import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { DatePickerWithRange } from "../ui/dateRangePicker";
import DestinationSelect from "./DestinationSelect";
import type { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import type { SearchInformation } from "../../models/Default";

const SearchWrapper = ({
	setSearchInformation,
}: { setSearchInformation: (arg: SearchInformation) => void }) => {
	const [selectedDestination, setSelectedDestination] = useState<string>();
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 7),
	});

	const isValidSearch: boolean = useMemo(() => {
		return (
			selectedDestination !== "" &&
			date?.from !== undefined &&
			date?.to !== undefined
		);
	}, [selectedDestination, date]);

	const updateSearch = () => {
		if (!isValidSearch) return;
		setSearchInformation({
			departure: selectedDestination ?? "DUB",
			date: {
				from: date?.from?.toISOString().slice(0, 10) ?? "",
				to: date?.to?.toISOString().slice(0, 10) ?? "",
			},
		});
	};

	return (
		<div className="flex gap-2 flex-col items-center">
			<DestinationSelect updateDestination={setSelectedDestination} />
			<DatePickerWithRange date={date} setDate={setDate} />
			<Button
				className="w-full"
				disabled={!isValidSearch}
				onClick={updateSearch}
			>
				Search
			</Button>
		</div>
	);
};

export default SearchWrapper;
