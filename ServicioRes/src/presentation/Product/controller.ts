import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateProductDto, UpdateProductDto } from '../../domain/dtos';


export class ProductController {
  //* DI
  constructor() { }
  public getProduct = async( req: Request, res: Response ) => {
    const product = await prisma.product.findMany();
    return res.json( product );
  };




  public getProductById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const product = await prisma.product.findFirst({
      where: { id }
    });
    
    ( product )
      ? res.json( product )
      : res.status( 404 ).json( { error: `Productwith id ${ id } not found` } );
  };




  public createProduct = async( req: Request, res: Response ) => {
    
    const [error, createProductDto] = CreateProductDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const product = await prisma.product.create({
      data: createProductDto!
    });

    res.json( product );

  };



  public updateProduct = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateProductDto] = UpdateProductDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const product = await prisma.product.findFirst({
      where: { id }
    });
    if ( !product ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updateProductDto!.values
    });
    res.json( updatedProduct );
  }


  public deleteProduct = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const product = await prisma.product.findFirst({
      where: { id }
    });

    if ( !product ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.product.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Productwith id ${ id } not found` });
  }
}