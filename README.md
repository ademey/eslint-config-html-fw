# HTML-FW ESLint Config #

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for Isobar React Air Force applications.

HTML-FW ESLint Config is an extension of [AirBnB's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) config. 

## Purpose

- Provide a centralized package can keep consistent linting rules across projects. 
- Branch linting rules for different levels of severity.

## What Changes

Initially this html-fw repo used a single `eslint` config file `.eslintrc`. This controls
what warnings the compiler throws, how our editors lint, and what stops code from being
committed.

The strict level of linting provided by our [AirBnB's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) base
is important to keeping code consistent across teams. 

During development a `debugger` statement may be needed. An unused variable (`no-unused-vars`)
should not stop the application from running. This package extends AirBnB rules and provides
presets for a default less strict state `index.js`, and the strict precommit rules `strict.js`.

This html-fw config now extends this main file by relative link. 
>Is it possible to have one of the html-fw packages a dependency of the main fw so
it can be imported like [below](#usage)?

Applications like SEV will be able to import this config and extend it's main `eslint`
config from that.

## Thoughts

I still need to compare the output of this config vs the original. There are some
opinionated changes to the lighter rules sets. The strict set *should* be identical
to the original setup before this PR.

I am not super sure on the setup for package dependencies, dev, peer, etc?

I have used this on a local test project with `npm link` and the config can be extended
correctly with the minimal `.eslintrc` example [below](#usage).

## Install

> Not sure about the whole maven thing!

## Usage

To run via npm:
```
npm run lint
```

To lint with the stricter rules:
```
npm run lint:strict
```

## Configuration

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.


A projects main `eslint` config file can just be an extension of this package.
.eslintrc file:

```
{
  "extends": "html-fw"
}
```

This is the lowest level of linting. During development things like `no-trailing-spaces`
will not stop the application from running. 

Precommit hooks should be used to to prevent these lighter rules from source code.

## Strict Rules

When running precommit hooks, target a new eslint config file:
```
{
  "extends": "html-fw/strict"
}
```

This will import `strict.js` from this package. These strict rules are considered our coding standard.
The base package should be seen as a deviation only for development. It my be more transparent to 
have the strict rules as the main package and use a lighter set explicitly!

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.



