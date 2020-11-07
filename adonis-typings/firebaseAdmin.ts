declare module '@ioc:Adonis/Addons/FirebaseAdmin' {
	import * as firebaseAdmin from 'firebase-admin'
	export default firebaseAdmin

	export interface FirebaseAdminConfig {
		credential: string
		databaseURL: string
	}
}
