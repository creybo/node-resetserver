// ===========================
// P U E R T O
// ===========================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// E N T O R N O
// ===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================================
// V e n c i m i e n t o    d e l    T o k e n
// =============================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =============================================
// S E E D   d e   a u t e n t i c a c i ó n
// =============================================
process.env.SEED = process.env.SEED || 'este-es-el seed-desarrollo';

// ===========================
//  B A S E   D E   D A T O S
// ===========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;