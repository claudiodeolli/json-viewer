import './presentation/presentation.module.js'
import Worker from '../src/workers/jsonLoader.worker.js';
import { JsonLoaderGateway } from './infra/Gateway/JsonLoaderGateway.js';
import { EventEmitter } from './infra/EventEmitter/EventEmitter.js';
import JsonLoaderGatewayHttp from './infra/gateway/JsonLoaderGatewayHttp.js';

const getJson = JsonLoaderGatewayHttp.getJson;
window.worker = new Worker();
window.eventEmitter = new EventEmitter();
window.gateway = new JsonLoaderGateway(getJson);