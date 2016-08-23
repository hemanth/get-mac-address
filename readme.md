# get-mac-address [![Build Status](https://travis-ci.org/hemanth/get-mac-address.svg?branch=master)](https://travis-ci.org/hemanth/get-mac-address)

> Get mac address[es].


## Install

```
$ npm install --save get-mac-address
```


## Usage

```js
const MacAddress = require('get-mac-address');

MacAddress;

/*
{ 
  lo0: '00:00:00:00:00:00',
  en0: 'a4:5e:60:eb:cc:48',
  wdl0:'c2:da:24:52:4f:f6' 
}
*/
```

## CLI

```
$ npm install --global get-mac-address
```

```
$ get-mac-address --help

  Usage
    get-mac-address [input]

  Example:
    $ get-mac-address en0
    a4:5e:60:eb:cc:48
```

P.S: Build is unhappy -> [check [#1](https://github.com/hemanth/get-mac-address/issues/1)]

## License

MIT © [Hemanth.HM](https://h3manth.com)
