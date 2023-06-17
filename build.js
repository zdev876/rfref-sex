import fs from 'node:fs/promises';
import sex from './sex.js';

// Исправить RegExp для JSON
Object.values(sex).forEach(sexItem => {
  sexItem.regexp = sexItem.regexp.toString();
});

fs.writeFile('sex.json', JSON.stringify(sex, null, '  '));
