// APP.JS

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import documentRoutes from './routes/documentRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

dotenv.config();

const app = express();

app.use(helmet());

// ----- CORS CONFIG -----
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://doczz-one.vercel.app',       // <- your Vercel frontend
];

const envOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim()).filter(Boolean)
  : [];

const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

const corsOptions = {
  origin(origin, callback) {
    // Allow tools like Postman / server‑to‑server with no origin
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// ------------------------

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health routes
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'DocX API is running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/healthz', (req, res) => {
  res.json({
    status: 'OK',
    message: 'DocX API is healthy',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'DocX API is running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'DocX API root endpoint',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/notifications', notificationRoutes);

// 404 + error handlers
app.use(notFound);
app.use(errorHandler);

export default app;
