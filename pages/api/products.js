import { mongooseConnect } from '@/lib/mongoose';
import Product from '@/models/product';

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();

    switch (method) {
        case 'POST':
            try {
                const { title, description, price } = req.body;
                const productDoc = await Product.create({ title, description, price });
                res.status(201).json({ message: 'Product created', product: productDoc });
            } catch (e) {
                res.status(400).json({ message: `${e.message}` });
            }
            break;

        case 'GET':
            try {
                const products = await Product.find();
                res.status(200).json({ products });
            } catch (error) {
                res.status(500).json({ message: 'Internal Server Error' });
            }
            break;

        case 'DELETE':
            try {
                const id = req.query.id;
                await Product.findByIdAndDelete(id);
                res.status(200).json({ message: 'Product deleted' });
            } catch (e) {
                res.status(500).json({ message: `${e.message}` });
            }
            break;

        default:
            res.status(405).json({ message: 'Method Not Allowed' });
            break;
    }
}
