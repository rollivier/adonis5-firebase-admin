import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import * as firebaseAdmin from 'firebase-admin'
import Config from '@ioc:Adonis/Core/Config'
/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready, when this file is loaded by the framework.
| Hence, the level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = (await import('@ioc:Adonis/Lucid/Database')).default
|   const Event = (await import('@ioc:Adonis/Core/Event')).default
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class FirebaseAdminProvider {
	constructor(protected app: ApplicationContract) {}

	public register() {
		this.app.container.singleton('Adonis/Addons/FirebaseAdmin', () => {
			return { ...firebaseAdmin }
		})
	}

	public async boot() {
		const config: typeof Config = this.app.container.use('Adonis/Core/Config')
		firebaseAdmin.initializeApp({
			credential: firebaseAdmin.credential.cert(config.get('firebase.credential')),
			databaseURL: config.get('firebase.databaseURL'),
			storageBucket: config.get('firebase.storageBucket') || undefined,
		})
	}

	public async ready() {}

	public async shutdown() {}
}
