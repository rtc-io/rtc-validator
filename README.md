# rtc-validator

This is a collection of validation routines for validating different apsects
of WebRTC.


[![NPM](https://nodei.co/npm/rtc-validator.png)](https://nodei.co/npm/rtc-validator/)

[![Build Status](https://img.shields.io/travis/rtc-io/rtc-validator.svg?branch=master)](https://travis-ci.org/rtc-io/rtc-validator) [![unstable](https://img.shields.io/badge/stability-unstable-yellowgreen.svg)](https://github.com/dominictarr/stability#unstable) 

## Usage

All of the validator modules in this package export a single function which
uses the following function signature:

```
fn(topic) -> []
```

Whereas a normal validator function might return a value of `true` for no
problems, these validator functions return an array of errors encountered
while validating the `topic`.

This provides the ability to use the validators in the following way:

```
TODO: include example
```

## Reference

### `validator.ok(errors)`

Return whether the result of a validator passes the "ok" test, i.e. no
errors were returned.

### `rtc-validator/candidate`

Validate that an `RTCIceCandidate` (or plain old object with data, sdpMid,
etc attributes) is a valid ice candidate.

Specs reviewed as part of the validation implementation:

- <http://tools.ietf.org/html/draft-ietf-mmusic-ice-sip-sdp-03#section-8.1>
- <http://tools.ietf.org/html/rfc5245>

## License(s)

### Apache 2.0

Copyright 2014 National ICT Australia Limited (NICTA)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
