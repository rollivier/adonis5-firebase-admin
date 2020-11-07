<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Adonis5-Firebase-Admin](#adonis5-firebase-admin)
  - [Installation](#installation)
  - [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Adonis5-Firebase-Admin
> Adonisjs 5, Firebase admin, Firebase for Adonis5

[![typescript-image]][typescript-url] [![license-image]][license-url] [![npm-image]][npm-url] <!--[![circleci-image]][circleci-url]   -->

Firebase admin providers for AdonisJS 5

## Installation
```bash
npm i --save adonis5-firebase-admin
```

Compile your code:

```bash
node ace serve --watch
```
Connect all dependences:
```bash
node ace invoke adonis5-firebase-admin
```

- For other configuration, please update the `config/firebase.ts`.

## Usage

After adding firebase-admin provider to your app, you can import firebaseAdmin to access all the functions of the firebase admin

```typescript
import firebaseAdmin from '@ioc:Adonis/Addons/FirebaseAdmin'
```

- For example, you can create a middleware to check if the user is authenticated.	

```bash
node ace make:middleware Authenticate
```

```typescript
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import firebaseAdmin from '@ioc:Adonis/Addons/FirebaseAdmin'

export default class Authenticate {
  public async handle ({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const idToken = request.header('Authorization') as string
    firebaseAdmin.auth().verifyIdToken(idToken)
      .then(async function (decodedToken) {
        const uid = decodedToken.uid
        ...
        await next()
      }).catch(function (error) {
        response.status(401).send(error)
      })
  }
}

```

For additional details of Firebase Admin API, please check the Firebase SDK documentation by this link [Firebase docs](https://firebase.google.com/docs/admin/setup)



<!--[circleci-image]: https://img.shields.io/circleci/project/github/rollivier/adonis5-firebase-admin/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/rollivier/adonis5-firebase-admin "circleci"-->

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[npm-image]: https://img.shields.io/npm/v/adonis5-firebase-admin.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/adonis5-firebase-admin "npm"

[license-image]: https://img.shields.io/npm/l/adonis5-firebase-admin?color=blueviolet&style=for-the-badge&service=github
[license-url]: LICENSE.md "license"
