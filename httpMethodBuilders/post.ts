import * as supertest from 'supertest';

export class Post {
	async post(
		baseUrl: string,
		endpointUrl: string,
		payload: object,
		headerName?: string,
		headerValue?: string,
		queryParam?: object,
		pathParam?: string
	) {
		const request = supertest('');
		return await request
			.post(baseUrl + endpointUrl + `${pathParam}`)
			.send(payload)
			.set(headerName, headerValue)
			.query(queryParam);
	}
}
