import single from './single.js';
import multiple from './multiple.js';

function resolveActions(behavior) {
	return { single, multiple }[behavior];
}

export { resolveActions };
