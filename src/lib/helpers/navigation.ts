type Bounds = {
	top: number;
	bottom: number;
	height: number;
};

function frameBounds(container: Window | HTMLElement): Bounds {
	if (container instanceof Window) {
		return {
			top: container.scrollY,
			bottom: container.scrollY + container.innerHeight,
			height: container.innerHeight
		};
	}

	if (container instanceof HTMLElement) {
		return {
			top: container?.scrollTop,
			bottom: container.scrollTop + container.offsetHeight,
			height: container?.offsetHeight
		};
	}

	throw new Error('Container is not an element');
}

export function scrollContainerTo(
	container: Window | HTMLElement | null | undefined,
	item: HTMLElement | null | undefined
) {
	if (!container || !item) {
		return;
	}

	const frame = frameBounds(container);

	const element = {
		top: item.offsetTop,
		bottom: item.offsetTop + item.offsetHeight
	};

	if (element.top < frame.top) {
		container?.scrollTo({ top: element.top });
	}

	if (element.bottom > frame.bottom) {
		container?.scrollTo({
			top: element.bottom - frame.height
		});
	}
}
