skeleton-express-app
====================

Skeleton Express App

Anything in the /public directory is accessible.

Application Structure Overview:
	config/ - Holds 'development' or 'production' env variables.
	src/ - All the source code
		index.js - Entry point for the application
		init/ - All of the helpers used to initialize the express app.
			config.js - Loads specific configs.
			engine.js - Loads template engine.
			routes.js - Defines the routes for the application.
		middleware/ - Any express middleware handler routes should be defined here.
		public/ - The directory dedicated to static files.
		routes/ - Any callback for the application routes.
		services/ - Any helper functions, or API wrappers.

Guide to development:
	All express configuration actions should be in either index.js or init/

	If adding a new route, add to init/routes.js

	res.locals object should only be modified in middleware/ or routes/.

	API Wrappers get added to services/



e.g. <hostname>/temp.html

Running the app:
	node src/index.js

Installation:
	export NODE_ENV=development