const fs = require('fs');
const path = require('path');
const marked = require('marked');

const resourcesDir = path.join(process.cwd(), 'public', 'recursos', 'cohete-agua');
const outputDir = path.join(process.cwd(), 'public', 'recursos', 'cohete-agua');

// Basic CSS styles for the HTML files
const htmlTemplate = (content) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guaroduino STEAM</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 { color: #2563eb; }
        code {
            background: #f1f5f9;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background: #f1f5f9;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
        }
        ul, ol { padding-left: 20px; }
        .warning {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 12px;
            margin: 16px 0;
        }
    </style>
</head>
<body>
    ${content}
</body>
</html>
`;

// Convert markdown files to HTML
const convertFiles = () => {
    const files = fs.readdirSync(resourcesDir);
    
    files.forEach(file => {
        if (file.endsWith('.md')) {
            const filePath = path.join(resourcesDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const htmlContent = marked.parse(content);
            const htmlFilePath = path.join(outputDir, file.replace('.md', '.html'));
            
            fs.writeFileSync(htmlFilePath, htmlTemplate(htmlContent));
            console.log(`Converted ${file} to HTML`);
        }
    });
};

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

convertFiles(); 