const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const nav = document.getElementById('site-nav');

function setNav(open: boolean) {
	if (!toggle || !nav) return;
	nav.classList.toggle('is-open', open);
	toggle.setAttribute('aria-expanded', String(open));
}

if (toggle && nav) {
	toggle.addEventListener('click', () => setNav(!nav.classList.contains('is-open')));

	nav.addEventListener('click', (event) => {
		if ((event.target as Element).closest('a')) setNav(false);
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && nav.classList.contains('is-open')) {
			setNav(false);
			toggle.focus();
		}
	});

	window.matchMedia('(min-width: 720px)').addEventListener('change', (event) => {
		if (event.matches) setNav(false);
	});
}

const slogan = document.querySelector<HTMLButtonElement>('[data-slogan]');

slogan?.addEventListener('click', () => {
	slogan.setAttribute('aria-pressed', String(slogan.getAttribute('aria-pressed') !== 'true'));
});

const grainLines = document.querySelectorAll<HTMLElement>('.slogan-grain');

// The mask is authored at 1440px. Glyph advance widths drift slightly with font size, so the mask box is refitted to each line's real border box (plus the 0.3em bleed on every side).
const fitGrain = (line: HTMLElement, width: number, height: number) => {
	const fontSize = parseFloat(getComputedStyle(line).fontSize);
	line.style.setProperty('--grain-w', `${width + 0.6 * fontSize}px`);
	line.style.setProperty('--grain-h', `${height + 0.6 * fontSize}px`);
};

if ('ResizeObserver' in window) {
	const grainObserver = new ResizeObserver((entries) => {
		for (const entry of entries) {
			const size = entry.borderBoxSize[0];
			fitGrain(entry.target as HTMLElement, size.inlineSize, size.blockSize);
		}
	});
	grainLines.forEach((line) => grainObserver.observe(line));
}

grainLines.forEach((line) => {
	const grainSrc = line.style.getPropertyValue('--grain-mask').match(/url\((['"]?)(.+?)\1\)/)?.[2];
	if (!grainSrc) return;

	const probe = new Image();
	probe.addEventListener('load', () => line.classList.add('is-grained'));
	probe.src = grainSrc;
});

const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!reduceMotion.matches && 'IntersectionObserver' in window && revealItems.length) {
	root.classList.add('motion');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
	);

	revealItems.forEach((item) => observer.observe(item));
}

