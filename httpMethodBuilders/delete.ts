import * as supertest from 'supertest';

export class Delete {
	async delete(
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
			.delete(endpointUrl + `${pathParam}`)
			.send(payload)
			.set(headerName, headerValue)
			.query(queryParam);
	}
}
