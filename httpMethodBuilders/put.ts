import * as supertest from 'supertest';

export class Put {
	async put(
		baseUrl: string,
		endpointUrl: string,
		payload: object,
		headerName?: string,
		headerValue?: string,
		queryParam?: object,
		pathParam?: string
	) {
		const request = supertest(baseUrl);
		return await request
			.put(endpointUrl + `${pathParam}`)
			.send(payload)
			.set(headerName, headerValue)
			.query(queryParam);
	}
}
