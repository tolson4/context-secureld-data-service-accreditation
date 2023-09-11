/*!
 * Copyright (c) 2023 Dogwood Logic, Inc. All rights reserved.
 */
'use strict';

const context = require('./context');

const constants = {
  // default context output filename under ./contexts/
  CONTEXT_FILENAME: 'data-service-accreditation-v1.jsonld',
  // default context well known URL id
  CONTEXT_URL: 'urn:dsa:v1',
  // default context CBOR-LD codec id
  // value between 0x0 and 0x7FFF for globally registered term codec values
  // or >= 0x8000 for app-specific local terms
  CBORLD_VALUE: 0x8200
};

// map of all context URLs to context data
const contexts = new Map();
contexts.set(constants.CONTEXT_URL, context);

// map of all context URLs to CBOR-LD codec ids
const appContextMap = new Map();
appContextMap.set(constants.CONTEXT_URL, constants.CBORLD_VALUE);

module.exports = {
  CONTEXT: context,
  CONTEXT_URL: constants.CONTEXT_URL,
  appContextMap,
  constants,
  contexts
};
