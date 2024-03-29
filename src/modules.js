import './presentation/presentation.module.js'
import Worker from '../src/workers/jsonLoader.worker.js';
import { EventEmitter } from './infra/EventEmitter/EventEmitter.js';

window.worker = new Worker();
window.eventEmitter = new EventEmitter();