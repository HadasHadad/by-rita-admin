import { Product } from "@/models/product";
import mongooseConnect from "../../lib/mongoose";

export default async function handle(req, res) {
 const {method} = req;
 await mongooseConnect();
 if (req === 'POST'){
    const {title, description, price} = req.body;
    const productDoc = await Product.create(
        {title, description, price}
    )
        req.json(productDoc);
 }
}
