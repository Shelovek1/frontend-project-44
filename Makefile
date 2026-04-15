install:
	npm ci
brain-games:
	node bin/brain-games.js
link:
	npm link
publish:
	npm publish --dry-run
lint:
	npx eslint .