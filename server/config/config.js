require('dotenv').config();

module.exports = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'epscor_sounds'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'epscor-sound-map-secret-key',
        expiresIn: '24h'
    },
    upload: {
        maxFileSize: 50 * 1024 * 1024, // 50MB
        allowedFormats: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/m4a']
    }
};
