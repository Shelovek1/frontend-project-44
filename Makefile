install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	publish --dry-run
lint:
	npx eslint .