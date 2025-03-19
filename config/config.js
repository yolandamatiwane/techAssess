import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, 
    connectionLimit : 50,
    multipleStatements : true
})

const testDBConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connected to MySQL Database');
        connection.release();  // Release the connection back to the pool
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
    }
};

testDBConnection();

export {pool}