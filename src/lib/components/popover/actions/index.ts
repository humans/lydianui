import { press } from './press';
import { hover } from './hover';
import { BehaviorType } from '../types';

function resolveActions(behavior: BehaviorType) {
	return { press, hover }[behavior];
}

export { resolveActions };
