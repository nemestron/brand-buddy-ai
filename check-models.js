const fs = require('fs');
const https = require('https');

// 1. Read the API Key from .env.local
const envFile = fs.readFileSync('.env.local', 'utf8');
const keyMatch = envFile.match(/NEXT_PUBLIC_GEMINI_API_KEY=(.*)/);

if (!keyMatch) {
    console.error('❌ ERROR: Could not find NEXT_PUBLIC_GEMINI_API_KEY in .env.local');
    process.exit(1);
}

const apiKey = keyMatch[1].trim();
console.log('🔑 Key Found: ' + apiKey.substring(0, 5) + '...');

// 2. Ask Google for the list of models
const url = 'https://generativelanguage.googleapis.com/v1beta/models?key=' + apiKey;

console.log('📡 Contacting Google API...');

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.error) {
                console.error('❌ API Error:', json.error.message);
            } else if (json.models) {
                console.log('\n✅ SUCCESS! Available Models for your Key:');
                console.log('---------------------------------------------');
                json.models.forEach(m => {
                    // Only show models that generate content
                    if (m.supportedGenerationMethods.includes('generateContent')) {
                        console.log('• ' + m.name.replace('models/', ''));
                    }
                });
                console.log('---------------------------------------------');
            } else {
                console.log('⚠️ No models found. Raw response:', data);
            }
        } catch (e) {
            console.error('❌ Parse Error:', e.message);
        }
    });
}).on('error', (err) => {
    console.error('❌ Network Error:', err.message);
});
