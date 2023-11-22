import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCustomerDto, UpdateCustomerDto } from '../../domain/dtos';


export class CustomerController {
  //* DI
  constructor() { }
  public getCustomer = async( req: Request, res: Response ) => {
    const customers = await prisma.customer.findMany();
    return res.json( customers );
  };




  public getCustomerById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const customer = await prisma.customer.findFirst({
      where: { id }
    });
    
    ( customer )
      ? res.json( customer )
      : res.status( 404 ).json( { error: `Customer with id ${ id } not found` } );
  };




  public createCustomer = async( req: Request, res: Response ) => {
    
    const [error, createCustomerDto] = CreateCustomerDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const customer = await prisma.customer.create({
      data: createCustomerDto!
    });

    res.json( customer );

  };



  public updateCustomer = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateCustomerDto] = UpdateCustomerDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const customer = await prisma.customer.findFirst({
      where: { id }
    });
    if ( !customer) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedCustomer = await prisma.customer.update({
      where: { id },
      data: updateCustomerDto!.values
    });
    res.json( updatedCustomer );
  }


  public deleteCustomer = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const customer = await prisma.customer.findFirst({
      where: { id }
    });

    if ( !customer ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.customer.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Customer with id ${ id } not found` });
  }
}