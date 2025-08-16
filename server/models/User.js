const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

class User {
    static async createUser({ username, email, password, profileImage, bio }) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'epscor_sounds'
        });

        const hashedPassword = await bcrypt.hash(password, 10);
        
        try {
            const [result] = await connection.execute(
                'INSERT INTO users (username, email, password_hash, profile_image, bio) VALUES (?, ?, ?, ?, ?)',
                [username, email, hashedPassword, profileImage, bio]
            );
            await connection.end();
            return result.insertId;
        } catch (error) {
            await connection.end();
            throw error;
        }
    }

    static async findByEmail(email) {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'epscor_sounds'
        });

        try {
            const [rows] = await connection.execute(
                'SELECT * FROM users WHERE email = ?',
                [email]
            );
            await connection.end();
            return rows[0];
        } catch (error) {
            await connection.end();
            throw error;
        }
    }

    static async verifyPassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}
