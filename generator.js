const fs = require('fs');
const path = require('path');

// Configuration: Set your source directory and where you want the notebook generated
const SOURCE_DIR = './'; // Directory containing your .js files
const OUTPUT_HTML = './JS_Learning_Notebook.html';

function generateNotebook() {
    const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.js') && file !== 'generator.js');
    let accordionHTML = '';

    files.forEach(file => {
        const filePath = path.join(SOURCE_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract the header documentation block /* ... */
        const docMatch = content.match(/\/\*([\s\S]*?)\*\//);
        const documentation = docMatch ? docMatch[1].trim().replace(/\n/g, '<br>') : 'No documentation overview provided.';
        
        // Strip the main header comment to get the clean execution code
        const cleanCode = content.replace(/\/\*([\s\S]*?)\*\//, '').trim();

        // Escape HTML special characters so the code renders perfectly as text
        const safeCode = cleanCode
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        accordionHTML += `
        <details>
            <summary> ${file}</summary>
            <div class="doc-section">
                <strong>Concept Overview:</strong><br>
                ${documentation}
            </div>
            <pre><code>${safeCode}</code></pre>
        </details>\n`;
    });

    const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Automated JS Learning Notebook</title>
    <style>
        body { font-family: system-ui, sans-serif; background: #f4f6f9; padding: 40px; color: #333; }
        .notebook { max-width: 900px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        h1 { color: #2c3e50; border-bottom: 2px solid #eaecef; padding-bottom: 10px; margin-top: 0; }
        details { border: 1px solid #eaecef; border-radius: 6px; margin-bottom: 12px; padding: 15px; background: #fafbfc; }
        summary { font-weight: 600; font-size: 1.1em; cursor: pointer; outline: none; color: #0366d6; }
        summary:hover { color: #0056b3; }
        .doc-section { background: #eef5fa; border-left: 4px solid #3498db; padding: 12px; margin: 15px 0; border-radius: 4px; font-size: 0.95em; line-height: 1.5; }
        pre { background: #282c34; color: #abb2bf; padding: 15px; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="notebook">
        <h1> Automated JavaScript Learning Notebook</h1>
        <p>Generated automatically from your live workspace source files.</p>
        ${accordionHTML}
    </div>
</body>
</html>`;

    fs.writeFileSync(OUTPUT_HTML, template, 'utf8');
    console.log(`Success! Generated live notebook dashboard at: ${OUTPUT_HTML}`);
}

generateNotebook();