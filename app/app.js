function requireAll (r) { r.keys().filter(r => !r.includes('components')).forEach(r); }
requireAll(require.context('./', true, /\.pug$/));