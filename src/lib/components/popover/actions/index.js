import press from './press.js';
import hover from './hover.js';

function resolveActions(behavior) {
	return { press, hover }[behavior];
}

export { resolveActions };
