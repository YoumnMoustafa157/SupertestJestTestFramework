import * as fs from 'fs';

export class JsonReader {
	// Function to read the JSON file and parse it
	readJSONFile = <T>(filename: string): T => {
		const rawData = fs.readFileSync(filename, 'utf-8');
		return JSON.parse(rawData);
	};
}
