import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../../domain/dtos';


export class InvoiceController {
  //* DI
  constructor() { }
  public getInvoices = async( req: Request, res: Response ) => {
    const invoices = await prisma.invoice.findMany();
    return res.json( invoices );
  };




  public getInvoiceById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const invoice = await prisma.invoice.findFirst({
      where: { id }
    });
    
    ( invoice )
      ? res.json( invoice )
      : res.status( 404 ).json( { error: `Invoice with id ${ id } not found` } );
  };




  public createInvoice = async( req: Request, res: Response ) => {
    
    const [error, createInvoiceDto] = CreateInvoiceDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const invoice = await prisma.invoice.create({
      data: createInvoiceDto!
    });

    res.json( invoice );

  };



  public updateInvoice= async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateInvoiceDto] = UpdateInvoiceDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const invoice = await prisma.invoice.findFirst({
      where: { id }
    });
    if ( !invoice ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedInvoice = await prisma.invoice.update({
      where: { id },
      data: updateInvoiceDto!.values
    });
    res.json( updatedInvoice );
  }


  public deleteInvoice = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const invoice = await prisma.invoice.findFirst({
      where: { id }
    });

    if ( !invoice ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.invoice.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Invoice with id ${ id } not found` });
  }
}