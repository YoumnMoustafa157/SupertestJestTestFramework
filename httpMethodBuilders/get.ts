import * as supertest from 'supertest';

export class Get {
	async get(
		baseUrl: string,
		endpointUrl: string,
		payload?: object,
		headerName?: string,
		headerValue?: string,
		queryParam?: object,
		pathParam?: string
	) {
		const request = supertest(baseUrl);
		return await request
			.get(endpointUrl + `${pathParam}`)
			.send(payload)
			.set(headerName, headerValue)
			.query(queryParam);
	}
}
