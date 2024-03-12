import * as supertest from 'supertest';

export class Patch {
	async patch(
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
			.patch(endpointUrl + `${pathParam}`)
			.send(payload)
			.set(headerName, headerValue)
			.query(queryParam);
	}
}
