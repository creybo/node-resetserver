// ===========================
// P U E R T O
// ===========================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// E N T O R N O
// ===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================
//  B A S E   D E   D A T O S
// ===========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://creybo:OZUVcNNkccoFDmpx@cluster0.eovjv.mongodb.net/cafe';
}

process.env.URLDB = urlDB;