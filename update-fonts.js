const fs = require('fs');

// List of artwork HTML files
const artworkFiles = [
    'blue_2025.html',
    'green_2024.html',
    'orange_2024.html',
    'stick_and_support_2024.html',
    'two_colors_2024.html'
];

artworkFiles.forEach(filename => {
    if (fs.existsSync(filename)) {
        let content = fs.readFileSync(filename, 'utf8');
        
        // Add TikTok Sans font family to Tailwind config
        content = content.replace(
            /fontFamily: \{[^}]*\}/g,
            `fontFamily: {
                        'sans': ['TikTok Sans', 'sans-serif'],
                    }`
        );
        
        // Add Google Fonts link for TikTok Sans
        if (!content.includes('TikTok Sans')) {
            content = content.replace(
                '</script>',
                `</script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=TikTok+Sans:opsz,wght@12..36,300..900&display=swap" rel="stylesheet">`
            );
        }
        
        // Write the updated content back
        fs.writeFileSync(filename, content);
        console.log(`Updated fonts in ${filename}`);
    } else {
        console.log(`File ${filename} not found`);
    }
});

console.log('All artwork pages updated with TikTok Sans!'); 