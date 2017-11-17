var critical = require('critical');

critical.generate({
    inline: true,
    base: 'working_files/',
    src: 'index_unoptimized.html',
    dest: '../public/index-critical.html',
    minify: true,
});


