import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/swagger/*.yaml'], // Đường dẫn đến các file chứa chú thích (JSDoc)
}

const openapiSpecification = swaggerJsdoc(options);

export const swaggerUiServer = swaggerUi.serve
export const swaggerUiSetup = swaggerUi.setup(openapiSpecification)