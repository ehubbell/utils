const errorStyles = 'color: crimson';
const infoStyles = 'color: cadetblue';
const successStyles = 'color: aquamarine';

class logger {
	static log = (title, ...data) => {
		return console.log(title, ...data);
	};

	static error = (title, ...data) => {
		// process.env.NODE_SERVER ? logNode.error(title, ...data) : logBrowser.error(title, ...data);
		return console.error(`%c${title}`, errorStyles, ...data);
	};

	static warn = (title, ...data) => {
		// process.env.NODE_SERVER ? logNode.warn(title, ...data) : logBrowser.warn(title, ...data);
		return console.warn(`%c${title}`, errorStyles, ...data);
	};

	static info = (title, ...data) => {
		// process.env.NODE_SERVER ? logNode.info(title, ...data) : logBrowser.info(title, ...data);
		return console.info(`%c${title}`, infoStyles, ...data);
	};

	static success = (title, ...data) => {
		// process.env.NODE_SERVER ? logNode.info(title, ...data) : logBrowser.info(title, ...data);
		return console.info(`%c${title}`, successStyles, ...data);
	};

	static debug = (title, ...data) => {
		// process.env.NODE_SERVER ? logNode.debug(title, ...data) : logBrowser.debug(title, ...data);
		return console.debug(`%c${title}`, infoStyles, ...data);
	};
}

export { logger };

// Docs:
// https://developer.mozilla.team/en-US/docs/Web/API/Console
// https://betterstack.com/docs/logs/javascript/install/
