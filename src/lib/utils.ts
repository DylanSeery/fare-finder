import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getTimeDifference(startDate: Date, endDate: Date): string {
	const startTimestamp = startDate.getTime();
	const endTimestamp = endDate.getTime();
	const difference = Math.abs(endTimestamp - startTimestamp);
	const minutes = Math.floor(difference / (1000 * 60));
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	const formattedTime = `${hours ? `${hours}h ` : ""}${remainingMinutes ? `${remainingMinutes}m` : ""}`;
	return formattedTime;
}

export function getTimeFromDate(date: Date) {
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	const formattedTime = `${hours}:${minutes}`;
	return formattedTime;
}
