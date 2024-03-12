import config from '../config/base.config';
import * as supertest from 'supertest';
import { JsonReader } from '../utils/json-reader';
import { Users } from '../payloads/login-interface';
import { Post } from '../httpMethodBuilders/post';

export default class LoginEndpoint {
	private readonly httpMethod: Post = new Post();
	private readonly jsonReader: JsonReader = new JsonReader();
	readonly loginPayload = this.jsonReader.readJSONFile<Users>(
		'../payloads/json-payload/login-payload.json'
	);

	async postValidLogin() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['validUser']);
	}

	async postInvalidLoginEmailPass() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserEmailPass']);
	}

	async postInvalidLoginEmail() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserEmail']);
	}

	async postInvalidLoginPass() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserPass']);
	}

	async postInvalidLoginEmptyEmailPass() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserEmptyEmailPass']);
	}

	async postInvalidLoginEmptyPass() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserEmptyPas']);
	}

	async postInvalidLoginEmptyEmail() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserEmptyEmail']);
	}

	async postInvalidLoginCaseSensitivity() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserCaseSensitivity']);
	}

	async postInvalidLoginMalformedEmail() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['invalidUserMalformedEmail']);
	}

	async postInvalidLoginUntrimmedSpace() {
		return await this.httpMethod.post(config.baseURL, config.loginURL, this.loginPayload['validUserWithUntrimmedSpaceEmailPass']);
	}
}
