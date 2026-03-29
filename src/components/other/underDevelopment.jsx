import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function UnderDevelopment() {
	return (
		<div className="fixed right-4 top-20 z-50 w-[min(90vw,18rem)]  sm:bottom-4">
			<Alert variant="error" className="px-3 py-2 text-xs">
				<InfoIcon />
				<AlertTitle>Site under development</AlertTitle>
				<AlertDescription>
					Some sections may be incomplete or change soon.
				</AlertDescription>
			</Alert>
		</div>
	);
}
