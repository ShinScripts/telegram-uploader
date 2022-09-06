import { Telegraf } from 'telegraf';
import { readdirSync } from 'fs';
import 'dotenv/config';

// CHANGE THESE VALUES
const TOKEN = '';
const ID = '-'; // ID must begin with a minus, ex. -63738383

// --------------------------------

const bot = new Telegraf(TOKEN);
const filePath = './files/';

bot.launch({ dropPendingUpdates: true }).then(async () => {
	console.log(`${bot.botInfo.username} is now online`);

	const files = readdirSync(filePath);
	for (const [i, file] of files.entries()) {
		if (file.endsWith('.jpg')) {
			await bot.telegram
				.sendVideo(ID, {
					source: `${filePath}/${file}`,
				})
				.catch((err) => console.log(err));
		} else if (file.endsWith('.mp4')) {
			await bot.telegram
				.sendVideo(ID, {
					source: `${filePath}/${file}`,
				})
				.catch((err) => console.log(err));
		}
		console.log(`Uploaded file ${i + 1}/${files.length}`);
	}

	process.exit(0);
});
