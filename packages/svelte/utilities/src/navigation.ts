export function scrollContainerTo(
	container: HTMLElement | null | undefined,
	item: HTMLElement | null | undefined
) {
	if (!container || !item) {
		return;
	}

	const frame = {
		top: container.scrollTop,
		bottom: container.scrollTop + container.offsetHeight
	};

	const element = {
		top: item.offsetTop,
		bottom: item.offsetTop + item.offsetHeight
	};

	if (element.top < frame.top) {
		container.scrollTo({ top: element.top });
	}

	if (element.bottom > frame.bottom) {
		container.scrollTo({
			top: element.bottom - container.offsetHeight
		});
	}
}
