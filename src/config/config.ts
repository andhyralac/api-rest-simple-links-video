export default {
    API: {
        PORT: process.env.API_PORT || 3001,
        MONGO_URL: process.env.MONGO_URL || '',
        JWT_SECRET: process.env.JWT_SECRET || '',
        ENVIRONMENT: process.env.ENVIRONMENT
    }
}
