// Content stays visible and usable if JavaScript or motion is unavailable.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const activeAnimations = new Set();

async function animateBlock(element, distance = 28) {
  if (motionPreference.matches || !element.animate) return;
  // Keep content visible while image decoding finishes; motion is optional.
  const images = [...element.querySelectorAll('img')];
  await Promise.all(images.map((img) => img.decode?.().catch(() => {})));
  if (motionPreference.matches || !element.isConnected) return;
  const animation = element.animate(
    [{ opacity: 0.25, transform: `translateY(${distance}px)` }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 620, delay: Math.min(120, Math.max(0, Number(element.dataset.revealDelay) || 0)), easing: 'cubic-bezier(0.2, 0.65, 0.3, 1)' }
  );
  activeAnimations.add(animation);
  animation.finished.then(() => activeAnimations.delete(animation)).catch(() => activeAnimations.delete(animation));
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      animateBlock(entry.target);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('[data-reveal]').forEach((block) => observer.observe(block));
}

motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) activeAnimations.forEach((animation) => animation.cancel());
});

document.querySelectorAll('details').forEach((disclosure) => {
  disclosure.addEventListener('toggle', () => {
    if (disclosure.open) animateBlock(disclosure.querySelector('.detail-content'), 6);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const disclosure = document.activeElement?.closest('details[open]');
  if (!disclosure) return;
  disclosure.open = false;
  disclosure.querySelector('summary')?.focus();
});
