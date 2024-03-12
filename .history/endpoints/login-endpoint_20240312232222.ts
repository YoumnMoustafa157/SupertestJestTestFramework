import config from '../config/base.config';
import * as supertest from 'supertest';
import { JsonReader } from '../utils/json-reader';
import { Users } from '../payloads/login-interface';
import { Post } from '../httpMethodBuilders/post';
const request = supertest('');

export default class LoginEndpoint {
	private readonly httpMethod: Post = new Post();
	private readonly jsonReader: JsonReader = new JsonReader();
	readonly loginPayload = this.jsonReader.readJSONFile<Users>(
		'../payloads/json-payload/login-payload.json'
	);

	async postValidLogin() {
		//const validUserPayload = this.loginPayload['validUser'];
		// return await request.post(config.loginURL).send(this.loginPayload['validUser']);
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['validUser']);
	}

	async postInvalidLoginEmailPass() {
		//const invalidUserEmailPassPayload = this.loginPayload['invalidUserEmailPass'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserEmailPass']);
	}

	async postInvalidLoginEmail() {
		//const invalidUserEmailPayload = this.loginPayload['invalidUserEmail'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserEmail']);
	}

	async postInvalidLoginPass() {
		//const invalidUserPassPayload = this.loginPayload['invalidUserPass'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserPass']);
	}

	async postInvalidLoginEmptyEmailPass() {
		//const invalidUserEmptyEmailPassPayload = this.loginPayload['invalidUserEmptyEmailPass'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserEmptyEmailPass']);
	}

	async postInvalidLoginEmptyPass() {
		//const invalidUserEmptyPassPayload = this.loginPayload['invalidUserEmptyPass'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserEmptyPass']);
	}

	async postInvalidLoginEmptyEmail() {
		//const invalidUserEmptyEmailPayload = this.loginPayload['invalidUserEmptyEmail'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserEmptyEmail']);
	}

	async postInvalidLoginCaseSenstivity() {
		//const invalidUserCaseSenstivityPayload = this.loginPayload['invalidUserCaseSenstivity'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserCaseSenstivity']);
	}

	async postInvalidLoginMalformatEmail() {
		//const invalidUserMalformatEmailPayload = this.loginPayload['invalidUserMalformatEmail'];
		return await request.post(config.loginURL).send(this.loginPayload['invalidUserMalformatEmail']);
	}

	async postInvalidLoginUntrimmedSpace() {
		//const invalidUserMalformatEmailPayload = this.loginPayload['invalidUserMalformatEmail'];
		return await request.post(config.loginURL).send(this.loginPayload['validUserWithUntrimmedSpaceEmailPass']);
	}
}
