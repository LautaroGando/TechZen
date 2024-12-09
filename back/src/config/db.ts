import { Pool, PoolConfig, QueryResult } from 'pg';

const poolConfig: PoolConfig = {
  connectionString: process.env.DB_DEPLOY,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(poolConfig);

pool.query('SELECT NOW()', (err: Error | null, res: QueryResult | undefined) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
  } else if (res) {
    console.log('Conexión exitosa:', res.rows);
  }
});

export default pool;
