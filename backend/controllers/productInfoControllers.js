const Product = require('../models/productModel');

const getAllProductsInfo = async(req, res) =>{
  try{
    const products = await Product.find();
    res.status(200).json(products);
  }catch(err){
    res.status(500).json({message:'error finding products', err})
  }

};
const getProductInfo = async(req, res) =>{
  const {productId} = req.params;
  try{
    const product = await Product.findOne({productId});
    if(!product){
      res.status(400).json({message: "product not found"});
    }else{
      res.json(product);
    }
  }catch(err){
    res.status(500).json({err})
  }
}
const updateProductInfo = async(req, res) =>{
  const {productId} = req.params;
  const {productName, tag, productPrice, productDetail, productStock, productOwnerId, productImage} = req.body;
  try {
    const updatedProduct = await Member.findOneAndUpdate(
      { productId },
      { productName, tag, productPrice, productDetail, productStock, productOwnerId, productImage },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.json({ message: 'Member updated', member: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error updating member', error });
  }
}

const addProductInfo = async(req, res) =>{
  const {productId, productName, tag, productPrice, productDetail, productStock, productOwnerId, productImage } = req.body;
  try{
    const newProduct = await Product.create({
      productId, productName, tag, productPrice, productDetail, productStock, productOwnerId, productImage
    })
    res.status(201).json(newProduct);
  }catch(err){
    res.status(500).json({message:"Error adding product", err});
  }
}

const getProductByTag = async(req, res) =>{
  const {tag} = req.params;
  try{
    const productWithTag = await Product.find({tag});
    res.status(200).json(productWithTag);
  }catch(err){
    res.status(500).json({message: "Error getting products with the tag", err})
  }
}

const getProductByName = async(req, res) =>{
  const {productName} = req.params;
  try{
    const productWithName = await Product.find({productName});
    res.status(200).json(productWithName);
  }catch(err){
    res.status(500).json({message: "Error getting products with the name", err});
  }
}

const searchProducts = async (req, res) => {
  const { query } = req.params;
  try {
    const productsByName = await Product.find({ productName: { $regex: query, $options: 'i' } });
    const productsByTag = await Product.find({ tag: { $in: [query] } });
    const searchResults = [...productsByName, ...productsByTag];
    const uniqueResults = Array.from(
      new Set(searchResults.map(JSON.stringify)),
      (stringified) => JSON.parse(stringified)
    );
    res.status(200).json(Array.from(uniqueResults));
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllProductsInfo, getProductInfo, updateProductInfo, addProductInfo, getProductByTag, getProductByName, searchProducts };
