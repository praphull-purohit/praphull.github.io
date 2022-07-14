import type { RequestHandler } from './__types';

export const get: RequestHandler = async ({ locals }) => {
    return new Promise((resolve, reject) => {
        resolve({
            status: 200,
            body: {
                info: locals.info
            }
        });
    });
};
