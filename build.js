const fs = require('fs');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY');
  process.exit(1);
}

const html = fs.readFileSync('index.html', 'utf8')
  .replace('__SUPABASE_URL__', url)
  .replace('__SUPABASE_ANON_KEY__', key);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Built dist/index.html');
