import LoginEndpoint from '../endpoints/login-endpoint';

describe('Login Tests', () => {
	const loginEndpoint = new LoginEndpoint();

	it('POST valid login', async () => {
		const res = loginEndpoint.postValidLogin();
		expect((await res).statusCode).toBe(200);
		expect((await res).body.email).toEqual(loginEndpoint.loginPayload['validUser'].email);
	});

	it('POST invalid login invalid email and pass', async () => {
		const res = loginEndpoint.postInvalidLoginEmailPass();
		expect((await res).statusCode).toBe(401);
	});

	it('POST invalid login invalid email and valid pass', async () => {
		const res = loginEndpoint.postInvalidLoginEmail();
		expect((await res).statusCode).toBe(401);
	});

	it('POST invalid login valid email and invalid pass', async () => {
		const res = loginEndpoint.postInvalidLoginPass();
		expect((await res).statusCode).toBe(401);
	});

	it('POST invalid login Empty email and pass', async () => {
		const res = loginEndpoint.postInvalidLoginEmptyEmailPass();
		expect((await res).statusCode).toBe(401);
	});

	it('POST invalid login Empty email and valid pass', async () => {
		const res = loginEndpoint.postInvalidLoginEmptyEmail();
		expect((await res).statusCode).toBe(401);
	});

	it('POST invalid login valid email and Empty pass', async () => {
		const res = loginEndpoint.postInvalidLoginEmptyPass();
		expect((await res).statusCode).toBe(401);
	});

	it('POST invalid login case senstivity', async () => {
		const res = loginEndpoint.postInvalidLoginCaseSenstivity();
		expect((await res).statusCode).toBe(401);
	});

	it('POST invalid login malformated email', async () => {
		const res = loginEndpoint.postInvalidLoginMalformatEmail();
		expect((await res).statusCode).toBe(422);
	});

	it('POST invalid login untrimmed space', async () => {
		const res = loginEndpoint.postInvalidLoginUntrimmedSpace();
		expect((await res).statusCode).toBe(200);
	});
});
